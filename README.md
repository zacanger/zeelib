## zeelib

A small lib of FP, Node, and DOM utils.

* [Documentation](https://zacanger.github.io/zeelib)
* [npm](https://npmjs.com/package/zeelib)
* [Changes](./CHANGELOG.md)
* [Roadmap](./ROADMAP.md)
* [Contributing](./CONTRIBUTING.md)
* [License (MIT)](./LICENSE.md)

[![npm version](https://img.shields.io/npm/v/zeelib.svg)](https://npm.im/zeelib) [![CircleCI](https://circleci.com/gh/zacanger/zeelib/tree/master.svg?style=svg)](https://circleci.com/gh/zacanger/zeelib/tree/master) [![codecov](https://codecov.io/gh/zacanger/zeelib/branch/master/graph/badge.svg)](https://codecov.io/gh/zacanger/zeelib)

--------

## Usage

```javascript
import z from 'zeelib'

z.open('http://zacanger.com')
if (z.isEven(process.argv[2])) // do things
z.camelCaseToLispCase('thisString')
```

You can also import individual functions (recommended).

```javascript
import c from 'zeelib/lib/colorize'

console.log(c.bold(c.blue('HELLO THERE')))
```

Require also works:

```javascript
const z = require('zeelib')
const { exit } = require('zeelib')
const exit = require('zeelib/lib/exit')
```

If you get errors when using `zeelib` in a front-end build, you may need to use
something like Webpack's [node](https://webpack.js.org/configuration/node/)
option. Try:

```javascript
node: {
  fs: 'empty',
  net: 'empty',
  tls: 'empty',
  readline: 'empty',
  child_process: 'empty'
}
```

But I highly recommend just importing/requiring the functions you need.
