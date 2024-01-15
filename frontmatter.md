# zeelib

Utility library in TypeScript, with a focus on Node and FP utils and emphasis on
_not_ rewriting builtin features.

* [npm](https://npmjs.com/package/zeelib)
* [Changes](./CHANGELOG.md)
* [Contributing](./.github/CONTRIBUTING.md)
* [License (MIT)](./LICENSE.md)

[![npm version](https://img.shields.io/npm/v/zeelib.svg)](https://npm.im/zeelib) [![ko-fi](https://img.shields.io/badge/donate-KoFi-yellow.svg)](https://ko-fi.com/U7U2110VB) [![Support with PayPal](https://img.shields.io/badge/paypal-donate-yellow.png)](https://paypal.me/zacanger)

----

## Installation

`npm i zeelib`

## Usage

See the docs below for details (generated from types and comments). Example:

```typescript
import * as z from 'zeelib'

const answer = await z.prompt('Pick a letter')
if (z.isEmpty(answer)) process.exit(1)
```

----
