# What is this?!

Just a bunch of helpers functions that I use all the time.
Functions are self documented with JSDoc format

# Installation
`npm i ftdgomez_utils`

See [utils.md](https://github.com/ftdgomez/ftdgomez_utils/blob/main/utils.md) for documentation

env variables:
> NEXT_PUBLIC variables are only used if you are using next js and require to put those on the
client side.

- API_URL_BASE
- NEXT_PUBLIC_API_URL_BASE
> used by _fetch

- AUTH_COOKIE_NAME
- NEXT_PUBLIC_AUTH_COOKIE_NAME
> used by _checkAuthorizationCookie

### Usage:
For now, there are two set of functions. The `validationMethods` and `utils`.

#### Validation Methods:
See [validationMethods.md](https://github.com/ftdgomez/ftdgomez_utils/blob/main/validationMethods.md) for documentation
```javascript
import { validationMethods } from 'ftdgomez-utils';

const { isString, oneOf, isEmail } = validationMethods;

isString('hello world') // return true
oneOf('value', ['yes','no','value']) // return true
isEmail('hellothisisnotanemail') // return false
```

#### Utils:
See [utils.md](https://github.com/ftdgomez/ftdgomez_utils/blob/main/utils.md) for documentation

```javascript

import { _objectSize, _where } from 'ftdgomez-utils';

_objectSize({ a: 1, b: 2, c: 3}) // return 3

_where(
    [{ id: 1, name: 'John'}, { id: 2, name: 'Jane' }], 
    {id: 1}
  ); // return [{ id: 1, name: 'John' }]

```
