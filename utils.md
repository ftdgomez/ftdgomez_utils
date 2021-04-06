
> ftdgomez-utils@1.0.0 generate:docs
> jsdoc2md "src/utils.js"

## Constants

<dl>
<dt><a href="#_middleware">_middleware</a></dt>
<dd><p>_middleware es un objeto con funciones
útiles para user dentro de api routes de nextjs</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#_handleError">_handleError(res, error)</a> ⇒</dt>
<dd><p>Esta función debe ser llamada en un return
(y dentro de un catch) para poder matar la ejecución de todo lo demás.</p>
</dd>
<dt><a href="#_fetch">_fetch(url, method, body)</a> ⇒</dt>
<dd><p>Este método emplea la función fetch de javascript
con un set de opciones predefinidas para enviar y retornar
json data.</p>
</dd>
<dt><a href="#_setArrayToObject">_setArrayToObject(array, key)</a> ⇒ <code>Object</code></dt>
<dd><p>Esta función recibe un array de objetos
y una string que debe coincidir con una key dentro de los
objetos del primer array.</p>
<p>Devuelve un objeto con cada posisión del array referenciado
por la key en cuestión.</p>
</dd>
<dt><a href="#_formatDate">_formatDate(d)</a> ⇒ <code>String</code></dt>
<dd></dd>
<dt><a href="#_daysFromDate">_daysFromDate(date, days)</a> ⇒</dt>
<dd><p>given a Date return Date + given Days || 0</p>
</dd>
<dt><a href="#_checkAuthorizationCookie">_checkAuthorizationCookie(context, from)</a> ⇒ <code>Object</code></dt>
<dd></dd>
<dt><a href="#_objectHasValue">_objectHasValue(obj, properties)</a> ⇒ <code>Bool</code></dt>
<dd></dd>
<dt><a href="#_objectSize">_objectSize(obj)</a> ⇒</dt>
<dd><p>Looks through each value in the list, returning an array of all the values that matches the key-value pairs listed in properties.</p>
</dd>
<dt><a href="#_where">_where(array, properties)</a> ⇒</dt>
<dd></dd>
</dl>

<a name="_middleware"></a>

## \_middleware
_middleware es un objeto con funciones
útiles para user dentro de api routes de nextjs

**Kind**: global constant  

* [_middleware](#_middleware)
    * [.run(req, res, ...middlewares)](#_middleware.run)
    * [.catch(res, error)](#_middleware.catch)

<a name="_middleware.run"></a>

### _middleware.run(req, res, ...middlewares)
Si esta función es llamada como primera linea
dentro de un método "handler" en una ruta api de nextjs,
su finalidad es ejecutar tantos middlewares como sea posible
antes de la ejecución del resto de la función.

Si es llamada dentro de un trycatch (lo cual debería ser así),
esta función retornara un error para ser recibido luego por su
hermana "catch" y devolver un mensaje http de error.

**Kind**: static method of [<code>\_middleware</code>](#_middleware)  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>Request</code> | Request http object |
| res | <code>Response</code> | Response http object |
| ...middlewares | <code>any</code> | one or a set of middleware functions |

**Example**  
```js
try {
   await _middleware.run(req, res, middleware1, middleware2, ...);
} catch(error) {
   return _middleware.catch(res, error)
}
// el resto del handler y eventualmente
// la respuesta http
```
<a name="_middleware.catch"></a>

### _middleware.catch(res, error)
Esta es la función hermana de "run"
ver "run para referencia de uso conjunto."

**Kind**: static method of [<code>\_middleware</code>](#_middleware)  

| Param | Type | Description |
| --- | --- | --- |
| res | <code>Response</code> | Response http object |
| error | <code>Error</code> | An Error throw for another function |

<a name="_handleError"></a>

## \_handleError(res, error) ⇒
Esta función debe ser llamada en un return
(y dentro de un catch) para poder matar la ejecución de todo lo demás.

**Kind**: global function  
**Returns**: undefined  

| Param | Type | Description |
| --- | --- | --- |
| res | <code>Response</code> | Response http object |
| error | <code>Error</code> | Un error arrojado por un bloque trycatch |

<a name="_fetch"></a>

## \_fetch(url, method, body) ⇒
Este método emplea la función fetch de javascript
con un set de opciones predefinidas para enviar y retornar
json data.

**Kind**: global function  
**Returns**: fetch response as parsed json  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The url to fetch |
| method | <code>string</code> | default GET |
| body | <code>object</code> | data to POST || PUT |

<a name="_setArrayToObject"></a>

## \_setArrayToObject(array, key) ⇒ <code>Object</code>
Esta función recibe un array de objetos
y una string que debe coincidir con una key dentro de los
objetos del primer array.

Devuelve un objeto con cada posisión del array referenciado
por la key en cuestión.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | and array of objects |
| key | <code>String</code> | the key of the object for ref |

**Example**  
```js
// given this array of objects
const arr = [
 {
   _id: abcdefghi1234,
   value: 'hello world',
 },
 {
   _id: abcdefghi1235,
   value: 'hello world 2',
 },
]
// use the function as:
let newObj = _setArrayToObject(arr, '_id')
// now newObj is:
{
 'abcdefghi1234': {
     _id: abcdefghi1234,
     value: 'hello world',
   },
 'abcdefghi1235': {
     _id: abcdefghi1235,
     value: 'hello world 2',
   },
}
```
<a name="_formatDate"></a>

## \_formatDate(d) ⇒ <code>String</code>
**Kind**: global function  
**Returns**: <code>String</code> - with formart dd - mm - yy  

| Param | Type |
| --- | --- |
| d | <code>Date</code> | 

<a name="_daysFromDate"></a>

## \_daysFromDate(date, days) ⇒
given a Date return Date + given Days || 0

**Kind**: global function  
**Returns**: Date + Number  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> |  |
| days | <code>Number</code> | to sum to date |

<a name="_checkAuthorizationCookie"></a>

## \_checkAuthorizationCookie(context, from) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - userInfo object or redirect object if there is a error  

| Param | Type | Description |
| --- | --- | --- |
| context | <code>NEXT\_CONTEXT\_OBJ</code> |  |
| from | <code>String</code> | path to redirect if there is no credentias |

<a name="_objectHasValue"></a>

## \_objectHasValue(obj, properties) ⇒ <code>Bool</code>
**Kind**: global function  
**Returns**: <code>Bool</code> - true if obj has properties, false if not  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> |  |
| properties | <code>Object</code> | key value pair |

<a name="_objectSize"></a>

## \_objectSize(obj) ⇒
Looks through each value in the list, returning an array of all the values that matches the key-value pairs listed in properties.

**Kind**: global function  
**Returns**: an array of all the values that matches the key-value pairs listed in properties.  

| Param | Type |
| --- | --- |
| obj | <code>Object</code> | 

<a name="_where"></a>

## \_where(array, properties) ⇒
**Kind**: global function  
**Returns**: return an array  

| Param | Type |
| --- | --- |
| array | <code>Array</code> | 
| properties | <code>Object</code> | 

