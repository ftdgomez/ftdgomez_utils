export const utils = {
  /**
   * @description Esta función debe ser llamada en un return
   * (y dentro de un catch) para poder matar la ejecución de todo lo demás.
   * @param {Response} res Response http object
   * @param {Error} error Un error arrojado por un bloque trycatch
   * @returns undefined
   */
  _handleError(res, error) {
    res
      .status(error?.status || 500)
      .json(error || { error: 'Ha ocurrido un error inesperado.' });
  },

  /**
   * @description Este método emplea la función fetch de javascript
   * con un set de opciones predefinidas para enviar y retornar
   * json data.
   * @param {string} url The url to fetch
   * @param {string} method default GET
   * @param {object} body data to POST || PUT
   * @returns fetch response as parsed json
   */
  async _fetch(url, method, body, addHeaders) {
    const urlBase =
      process.env.API_URL_BASE || process.env.NEXT_PUBLIC_API_URL_BASE || '';
    const URL = urlBase + url;
    const config = {};
    config.method = method || 'GET';
    if (body) config.body = JSON.stringify(body);
    config.headers = {
      'Content-Type': 'application/json',
    };
    if (addHeaders) config.headers = { ...config.headers, ...addHeaders };
    try {
      const apiResponse = await fetch(URL, config);
      const apiJson = await apiResponse.json();
      return apiJson;
    } catch (error) {
      console.log(error);
      return { errors: error.toString() };
    }
  },

  /**
   * @description _middleware es un objeto con funciones
   * útiles para user dentro de api routes de nextjs
   */
  _middleware: {
    /**
     * @description Si esta función es llamada como primera linea
     * dentro de un método "handler" en una ruta api de nextjs,
     * su finalidad es ejecutar tantos middlewares como sea posible
     * antes de la ejecución del resto de la función.
     *
     * Si es llamada dentro de un trycatch (lo cual debería ser así),
     * esta función retornara un error para ser recibido luego por su
     * hermana "catch" y devolver un mensaje http de error.
     *
     * @param {Request} req Request http object
     * @param {Response} res Response http object
     * @param  {...any} middlewares one or a set of middleware functions
     * @example
     *
     * try {
     *    await _middleware.run(req, res, middleware1, middleware2, ...);
     * } catch(error) {
     *    return _middleware.catch(res, error)
     * }
     * // el resto del handler y eventualmente
     * // la respuesta http
     */
    async run(req, res, ...middlewares) {
      const fns = [...middlewares];
      for (let i = 0; i < fns.length; i++) {
        const fn = fns[i];
        await fn(req, res, (result) => {
          return result;
        });
      }
    },
    /**
     * Esta es la función hermana de "run"
     * ver "run para referencia de uso conjunto."
     * @param {Response} res Response http object
     * @param {Error} error An Error throw for another function
     */
    catch(res, error) {
      utils._handleError(res, error);
    },
  },

  /**
   * @description Esta función recibe un array de objetos
   * y una string que debe coincidir con una key dentro de los
   * objetos del primer array.
   *
   * Devuelve un objeto con cada posisión del array referenciado
   * por la key en cuestión.
   * @param {Array} array and array of objects
   * @param {String} key the key of the object for ref
   * @returns {Object}
   * @example
   * // given this array of objects
   * const arr = [
   *  {
   *    _id: abcdefghi1234,
   *    value: 'hello world',
   *  },
   *  {
   *    _id: abcdefghi1235,
   *    value: 'hello world 2',
   *  },
   * ]
   * // use the function as:
   * let newObj = _setArrayToObject(arr, '_id')
   * // now newObj is:
   * {
   *  'abcdefghi1234': {
   *      _id: abcdefghi1234,
   *      value: 'hello world',
   *    },
   *  'abcdefghi1235': {
   *      _id: abcdefghi1235,
   *      value: 'hello world 2',
   *    },
   * }
   */
  _setArrayToObject(array, key) {
    let temp = {};
    Object.assign(
      temp,
      ...array.map((o) => {
        return { [o[key]]: o };
      }),
    );
    return temp;
  },

  /**
   * @param {Date} d
   * @returns {String} with formart dd - mm - yy
   */
  _formatDate(d) {
    const date = new Date(d);
    return `${date.getDate()} - ${date.getMonth() + 1} - ${date.getFullYear()}`;
  },

  /**
   * @description given a Date return Date + given Days || 0
   * @param {Date} date
   * @param {Number} days to sum to date
   * @returns Date + Number
   */
  _daysFromDate(date, days = 0) {
    return date.setDate(date.getDate() + days);
  },

  /**
   *
   * @param {NEXT_CONTEXT_OBJ} context
   * @param {String} from path to redirect if there is no credentias
   * @returns {Object} userInfo object or redirect object if there is a error
   */
  _checkAuthorizationCookie(context, from) {
    const { req, res } = context;
    const Cookies = require('cookies');
    const cookieName =
      process.env.AUTH_COOKIE_NAME ||
      process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME ||
      'userInfo';
    const userInfo = new Cookies(req, res).get(cookieName);
    if (userInfo) {
      return JSON.parse(decodeURIComponent(userInfo));
    } else {
      return {
        error: {
          redirect: {
            destination: `/login${from ? `?redirectTo=${from}` : ''}`,
            permanent: false,
          },
        },
      };
    }
  },

  /**
   * @param {Object} obj
   * @param {Object} properties key value pair
   * @returns { Bool } true if obj has properties, false if not
   */
  _objectHasValue(obj, properties) {
    try {
      const key = Object.keys(properties)[0];
      return obj.hasOwnProperty(key) && obj[key] == properties[key];
    } catch (error) {
      return false;
    }
  },

  /**
   * @description Looks through each value in the list, returning an array of all the values that matches the key-value pairs listed in properties.
   * @param {Object} obj
   * @returns {Array} an array of all the values that matches the key-value pairs listed in properties.
   */
  _objectSize(obj) {
    return Object.keys(obj).length;
  },

  /**
   *
   * @param { Array } array
   * @param { Object } properties
   * @returns return an array
   */
  _where(array, properties) {
    let response = [];
    array.forEach((el) => {
      if (_objectHasValue(el, properties)) {
        response.push(el);
      }
    });
    return response;
  },
};
