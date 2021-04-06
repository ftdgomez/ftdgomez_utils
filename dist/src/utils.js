"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports._handleError=_handleError,exports._fetch=_fetch,exports._setArrayToObject=_setArrayToObject,exports._formatDate=_formatDate,exports._daysFromDate=_daysFromDate,exports._checkAuthorizationCookie=_checkAuthorizationCookie,exports._objectHasValue=_objectHasValue,exports._objectSize=_objectSize,exports._where=_where,exports._middleware=void 0;function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _iterableToArray(a){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a))return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function asyncGeneratorStep(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function _asyncToGenerator(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function f(a){asyncGeneratorStep(h,d,e,f,g,"next",a)}function g(a){asyncGeneratorStep(h,d,e,f,g,"throw",a)}var h=a.apply(b,c);f(void 0)})}}/**
 * @description Esta función debe ser llamada en un return
 * (y dentro de un catch) para poder matar la ejecución de todo lo demás.
 * @param {Response} res Response http object
 * @param {Error} error Un error arrojado por un bloque trycatch
 * @returns undefined
 */function _handleError(a,b){a.status((null===b||void 0===b?void 0:b.status)||500).json(b||{error:"Ha ocurrido un error inesperado."})}/**
 * @description Este método emplea la función fetch de javascript
 * con un set de opciones predefinidas para enviar y retornar
 * json data.
 * @param {string} url The url to fetch
 * @param {string} method default GET
 * @param {object} body data to POST || PUT
 * @returns fetch response as parsed json
 */function _fetch(){return _fetch2.apply(this,arguments)}/**
 * @description _middleware es un objeto con funciones
 * útiles para user dentro de api routes de nextjs
 */function _fetch2(){return _fetch2=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function a(b,c,d,e){var f,g,h,i,j;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return f=process.env.API_URL_BASE||process.env.NEXT_PUBLIC_API_URL_BASE||"",g=f+b,h={},h.method=c||"GET",d&&(h.body=JSON.stringify(d)),h.headers={"Content-Type":"application/json"},e&&(h.headers=_objectSpread(_objectSpread({},h.headers),e)),a.prev=7,a.next=10,fetch(g,h);case 10:return i=a.sent,a.next=13,i.json();case 13:return j=a.sent,a.abrupt("return",j);case 17:return a.prev=17,a.t0=a["catch"](7),console.log(a.t0),a.abrupt("return",{errors:a.t0.toString()});case 21:case"end":return a.stop();}},a,null,[[7,17]])})),_fetch2.apply(this,arguments)}var _middleware={/**
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
   */run:function run(a,b){var c=arguments;return _asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function d(){var e,f,g,h,j,k;return regeneratorRuntime.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:for(e=c.length,f=Array(2<e?e-2:0),g=2;g<e;g++)f[g-2]=c[g];h=[].concat(f),j=0;case 3:if(!(j<h.length)){d.next=10;break}return k=h[j],d.next=7,k(a,b,function(a){return a});case 7:j++,d.next=3;break;case 10:case"end":return d.stop();}},d)}))()},/**
   * Esta es la función hermana de "run"
   * ver "run para referencia de uso conjunto."
   * @param {Response} res Response http object
   * @param {Error} error An Error throw for another function
   */catch:function _catch(a,b){_handleError(a,b)}};/**
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
 */exports._middleware=_middleware;function _setArrayToObject(a,b){var c={};return Object.assign.apply(Object,[c].concat(_toConsumableArray(a.map(function(a){return _defineProperty({},a[b],a)})))),c}/**
 * @param {Date} d
 * @returns {String} with formart dd - mm - yy
 */function _formatDate(a){var b=new Date(a);return"".concat(b.getDate()," - ").concat(b.getMonth()+1," - ").concat(b.getFullYear())}/**
 * @description given a Date return Date + given Days || 0
 * @param {Date} date
 * @param {Number} days to sum to date
 * @returns Date + Number
 */function _daysFromDate(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:0;return a.setDate(a.getDate()+b)}/**
 *
 * @param {NEXT_CONTEXT_OBJ} context
 * @param {String} from path to redirect if there is no credentias
 * @returns {Object} userInfo object or redirect object if there is a error
 */function _checkAuthorizationCookie(a,b){var c=a.req,d=a.res,e=require("cookies"),f=process.env.AUTH_COOKIE_NAME||process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME||"userInfo",g=new e(c,d).get(f);return g?JSON.parse(decodeURIComponent(g)):{error:{redirect:{destination:"/login".concat(b?"?redirectTo=".concat(b):""),permanent:!1}}}}/**
 * @param {Object} obj
 * @param {Object} properties key value pair
 * @returns { Bool } true if obj has properties, false if not
 */function _objectHasValue(a,b){try{var c=Object.keys(b)[0];return a.hasOwnProperty(c)&&a[c]==b[c]}catch(a){return!1}}/**
 * @description Looks through each value in the list, returning an array of all the values that matches the key-value pairs listed in properties.
 * @param {Object} obj
 * @returns an array of all the values that matches the key-value pairs listed in properties.
 */function _objectSize(a){return Object.keys(a).length}/**
 *
 * @param { Array } array
 * @param { Object } properties
 * @returns return an array
 */function _where(a,b){var c=[];return a.forEach(function(a){_objectHasValue(a,b)&&c.push(a)}),c}