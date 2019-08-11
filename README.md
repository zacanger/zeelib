# zeelib

Node utility library.

* [Documentation](https://zacanger.github.io/zeelib)
* [npm](https://npmjs.com/package/zeelib)
* [Changes](./CHANGELOG.md)
* [Contributing](./CONTRIBUTING.md)
* [License (MIT)](./LICENSE.md)

[![npm version](https://img.shields.io/npm/v/zeelib.svg)](https://npm.im/zeelib) [![CircleCI](https://circleci.com/gh/zacanger/zeelib/tree/master.svg?style=svg)](https://circleci.com/gh/zacanger/zeelib/tree/master) [![codecov](https://codecov.io/gh/zacanger/zeelib/branch/master/graph/badge.svg)](https://codecov.io/gh/zacanger/zeelib) [![Patreon](https://img.shields.io/badge/patreon-donate-yellow.svg)](https://www.patreon.com/zacanger) [![ko-fi](https://img.shields.io/badge/donate-KoFi-yellow.svg)](https://ko-fi.com/U7U2110VB)

--------

## Usage

`zeelib` is a collection of utility functions. Think Lodash, but for Node. See
the [docs](https://zacanger.github.io/zeelib) for details.

Example usage:

```typescript
import * as z from 'zeelib'

if (!module.parent) {
  const args = z.getArgs()
  if (!args.length) {
    console.log('Usage: my-thing some-command')
    z.exit(1)
  }
}
```

If you're using Node `require`, you'll need to access `default`:

```javascript
const zeelib = require('zeelib')

zeelib.getArgs.default()
```
