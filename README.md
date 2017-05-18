## zeelib

A small lib of FP, Node, and DOM utils.

Changes:
* `0.8.0` &mdash; *breaking* &mdash; several changes
  * moved full documentation to [this file](./DOC.md)
  * added `isSet`
  * added `uniqAndFlatten`, the inverse of `flattenAndUniq`
  * added `isMap`
  * renamed `getDiskUsage` to `getFreeDisk`
  * renamed `getNiceDate` to `getNiceTime`
  * `length` now works for array, object, string, set, and map
  * `getTitle` now falls back to `document.title`
  * `flattenAndUniq` actually does what it sounds like now, sorry about that!
  * `getNodeModules` now returns an array of locally installed modules, instead
      of an object.
  * `consoleGroup` and `consoleGroupEnd` removed (not working correctly)
  * deprecated (will be removed in 1.0.0):
    * `getBrokenImage`
    * `isEmptyString` (just is `isEmpty`)
    * `isObjectEmpty` (just is `isEmpty`)
    * `isObjectEqual` (use `eq`)
    * `isType` (use `is`)
    * `where` (use `findWhere`)
* `0.7.0` &mdash; *important* &mdash; If you've installed in the past eight days (since `0.6.17`), you're probably
  seeing a lot of annoying logs! I did something dumb. Please update!
* `0.6.0` &mdash; *breaking* &mdash; `base64BufferDec` and `base64BufferEnc` are now `btoa` and `atob`
* `0.5.0` &mdash; *breaking* &mdash; `hexRegex` is now a function, `getHexRegex`
* `0.4.0` &mdash; *breaking* &mdash; no longer `require('zeelib').default`, just `require('zeelib')`
* `0.2.0` &mdash; *breaking* &mdash; all functions now in top level
  * (No more `import { fp } from 'zeelib'` to use `zipWith`, just `import { zipWith } from 'zeelib'`)

Just a load of small utilities.

## Usage

```javascript
import z from 'zeelib'

z.open('http://zacanger.com')
if (z.isEven(process.argv[2])) // do things
z.camelCaseToLispCase('thisString')
```

You can also import individual functions.

```javascript
import c from 'zeelib/dist/colorize'

console.log(c.bold(c.blue('HELLO THERE')))
```

If you're using `require` with individual files you'll need to use `default`:

```javascript
const c = require('zeelib/dist/colorize').default
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

Or, just import the functions you need (like
`import words from 'zeelib/dist/words'`).

See [this file](./DOC.md) for full documentation.

## License

[WTFPL](./LICENSE.md)

## Contributing

* This project uses Flow.
* Please run `npm test`.
* If you can, please _add_ a test.
* Please add your thing in `src/index.js` in the appropriate place
* Make sure you run `npm run build`
  * (This also runs `test`, which also runs `flow` and `eslint`)
