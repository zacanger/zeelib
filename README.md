# zeelib

A small lib of Node and string utils.

* [Documentation](https://zacanger.github.io/zeelib)
* [npm](https://npmjs.com/package/zeelib)
* [Changes](./CHANGELOG.md)
* [Contributing](./CONTRIBUTING.md)
* [License (MIT)](./LICENSE.md)

[![npm version](https://img.shields.io/npm/v/zeelib.svg)](https://npm.im/zeelib) [![CircleCI](https://circleci.com/gh/zacanger/zeelib/tree/master.svg?style=svg)](https://circleci.com/gh/zacanger/zeelib/tree/master) [![codecov](https://codecov.io/gh/zacanger/zeelib/branch/master/graph/badge.svg)](https://codecov.io/gh/zacanger/zeelib)

--------

## Usage

`zeelib` is a collection of over 200 utility functions.
See the [docs](https://zacanger.github.io/zeelib) for details.

Example usage:
```javascript
import z from 'zeelib'
// require also works:
const z = require('zeelib')

// named imports work:
import { exit, getArgs } from 'zeelib'
// or with require:
const { exit, getArgs } = require('zeelib')

// but i highly recommend importing individual functions:
import getArgs from 'zeelib/lib/get-args'
import exit from 'zeelib/lib/exit'
// or with require:
const getArgs = require('zeelib/lib/get-args')
const exit = require('zeelib/lib/exit')

if (!module.parent) {
  const args = getArgs()
  if (!args.length) {
    console.log('Usage: my-thing some-command')
    exit(1)
  }
}
```

If you're not importing just the functions you need (and you should be!), you
may have problems with front-end builds. Try something like this (assuming a
Webpack config):

```javascript
node: {
  fs: 'empty',
  net: 'empty',
  tls: 'empty',
  readline: 'empty',
  child_process: 'empty'
}
```

## TODO

* Convert to TS (breaking)
* Convert all Node callback style async fns to return Promises
* Remove most of the misc string/type/regex fns
