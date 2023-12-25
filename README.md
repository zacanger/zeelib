# zeelib

Node utility library.

* [Documentation](https://zacanger.github.io/zeelib)
* [npm](https://npmjs.com/package/zeelib)
* [Changes](./CHANGELOG.md)
* [Contributing](./CONTRIBUTING.md)
* [License (MIT)](./LICENSE.md)

[![npm version](https://img.shields.io/npm/v/zeelib.svg)](https://npm.im/zeelib) [![ko-fi](https://img.shields.io/badge/donate-KoFi-yellow.svg)](https://ko-fi.com/U7U2110VB) [![Support with PayPal](https://img.shields.io/badge/paypal-donate-yellow.png)](https://paypal.me/zacanger)

--------

## Usage

`zeelib` is a collection of utility functions. Think Lodash, but for Node. See
the [docs](https://zacanger.github.io/zeelib) for details.

Example usage:

```typescript
import * as z from 'zeelib'

if (!module.parent) {
  z.termPrompt('do the thing?')
    .then((yes) => {
      if (yes) {
        console.log(z.colorize.blue('said yes!'))
      }
    })
}
```

If you're using Node `require`, you'll need to access `default`:

```javascript
const zeelib = require('zeelib')

zeelib.getArgs.default()
```
