## zeelib

A small lib of FP, Node, and DOM utils.

Changes:

* `0.4.0` -- *breaking* -- no longer `require('zeelib').default`, just `require('zeelib')`
* `0.2.0` -- *breaking* -- all functions now in top level
  * (No more `import { fp } from 'zeelib'` to use `zipWith`, just `import { zipWith } from 'zeelib'`).

Just a load of small utilities.

There's a full list at the bottom of this file.

Documentation is mostly just function names. Sorry.

Usage:

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

## License

[WTFPL](./LICENSE.md)

## Contributing

* This project uses Flow.
* Please run `npm test`.
* If you can, please _add_ a test.
* Please add your thing in these places:
  * `src/index.js` in the appropriate place
  * The full list below
* Make sure you run `npm run build`
  * (This also runs `test`, which also runs `flow` and `eslint`)

## Full list:

### dom

* getCookie
* getElementPosition
* getHeight
* getIsBrowser
* getReferrer
* getScrollBarWidth
* getWidth
* restoreScrollPosition
* scrollTop

### keycodes

* getKeyCodes

### regex, string utils, etc.

* addNewlines
* alphaNumericOnly
* camelCaseToLispCase
* camelCaseToSnakeCase
* capitalizeFirstChar
* collapseWhitespace
* combineRegex
* cssToJson
* escapeHtml
* fixWindowsSlashes
* getComplimentaryColors
* getRandomHex32
* getRandomString
* getUid4
* getUid8
* hexRegex
* inlineString
* isAlphaNumeric
* isEmoji
* isEmptyString
* isHexBased
* isMobileOrTablet
* isStringSomewhereInArray
* isValidEmail
* isValidHex
* lightenOrDarken
* lispCaseToCamelCase
* minifyString
* newlinesToSpaces
* normalizeClassname
* normalizeColor
* normalizeText
* randomColor
* removeNewlines
* removeNonAlpha
* removeNonAlphaNumeric
* removeNonNumeric
* removeNumeric
* removeTags
* removeWhitespace
* rot13
* snakeCaseToCamelCase
* stripPunctuation
* trimHash
* trimSpaces
* unescapeHtml

### node

* base64BufferDec
* base64BufferEnc
* colorize
* findPort
* getIsNode
* getArgs
* getNodeModules
* getTerminalColumns
* getTerminalRows
* getTerminalSize
* getUserHome
* hasColor
* isInstalled
* logWithInfo
* open
* readJson
* readJsonSync
* termPrompt
* tinyRouter
* writeError
* writeJson
* writeJsonSync

### fp utils

* all
* and
* any
* apply
* car
* cdr
* compose
* concat
* concatMap
* cons
* curry
* curry2
* curry3
* curry4
* drop
* dropWhere
* dropWhile
* each
* elem
* filter
* findIndex
* findWhere
* foldl
* foldl1
* foldr
* foldr1
* getFunctionArguments
* head
* id
* init
* invoke
* last
* length
* lines
* map
* memoize
* mix
* not
* notElem
* once
* or
* pair
* pipe
* pluck
* propEq
* reduce
* replicate
* reverse
* span
* splitAt
* tail
* take
* takeWhile
* unfold
* unlines
* unwords
* unzip
* unzip3
* words
* zip
* zip3
* zipThen
* zipWith
* zipWith3

### types

* isArray
* isArrayLike
* isBoolean
* isDate
* isDefined
* isDomElement
* isEmpty
* isEven
* isFloat
* isFunction
* isInteger
* isJson
* isNan
* isNegative
* isNodeList
* isNull
* isNumber
* isObject
* isObjectEqual
* isOdd
* isPositive
* isPow2
* isPrimitive
* isPromise
* isRegExp
* isString
* isType
* isUndefined
* objectToString
* toType
* typeOf

### misc

* chunk
* cloneWithout
* copy
* copyWithout
* deepCopy
* dir
* doubleUntil
* filterFloat
* getBrokenImage
* getKeyByValue
* getNiceDate
* getTransparentGif
* greatestCommonDivisor
* invoker
* isObjectEmpty
* leastCommonMultiple
* leftPad
* lesser
* lexSort
* logWithTimestamp
* maximum
* maybeArgs
* minimum
* nco
* noSwitch
* objectAssign
* objectClone
* objectFromEntries
* objectInherit
* product
* range
* reverseDigits
* shallowCopy
* sleep
* splitStringOn
* sum
* tap
* throwError
* timeTest
* transpose
* transposeFlat
* tryExecNTimes
* unless
* xor
