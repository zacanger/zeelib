## zeelib

A small lib of FP, Node, and DOM utils.

[Full documentation](https://zacanger.github.io/zeelib)

[Changes](./CHANGELOG.md)

[npm](https://npmjs.com/package/zeelib)

[Roadmap](./ROADMAP.md)

--------

## Usage

```javascript
import z from 'zeelib'

z.open('http://zacanger.com')
if (z.isEven(process.argv[2])) // do things
z.camelCaseToLispCase('thisString')
```

You can also import individual functions.

```javascript
import c from 'zeelib/lib/colorize'

console.log(c.bold(c.blue('HELLO THERE')))
```

If you're using `require` with individual files you'll need to use `default`:

```javascript
const c = require('zeelib/lib/colorize').default
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
`import words from 'zeelib/lib/words'`).

See [the full documentation](https://zacanger.github.io/zeelib).

## License

[WTFPL](./LICENSE.md)

## Contributing

* This project uses Flow.
* Please run `npm test`.
* If you can, please _add_ a test.
* Please add your thing in `src/index.js` in the appropriate place
* Make sure you run `npm run build`
  * (This also runs `test`, which also runs `flow` and `eslint`)
