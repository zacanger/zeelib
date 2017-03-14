## zeelib

A small lib of FP, Node, and DOM utils.

Changes:

* `0.6.0` &mdash; *breaking* &mdash; `base64BufferDec` and `base64BufferEnc` are now `btoa` and `atob`
* `0.5.0` &mdash; *breaking* &mdash; `hexRegex` is now a function, `getHexRegex`
* `0.4.0` &mdash; *breaking* &mdash; no longer `require('zeelib').default`, just `require('zeelib')`
* `0.2.0` &mdash; *breaking* &mdash; all functions now in top level
  * (No more `import { fp } from 'zeelib'` to use `zipWith`, just `import { zipWith } from 'zeelib'`)

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
* getLengthOfElements
* getReferrer
* getScrollBarWidth
* getWidth
* restoreScrollPosition
* scrollTop

### regex, string utils, etc.

* abbrev
* abbrevNumber
* addCommasToNumber
* addNewlines
* alphaNumericOnly
* camelCaseToLispCase
* camelCaseToPascalCase
* camelCaseToSnakeCase
* capitalizeFirstChar
* collapseWhitespace
* combineRegex
* cssToJson
* escapeHtml
* fixWindowsSlashes
* formatMs
* getComplimentaryColors
* getHexRegex
* getQueryFromSearch
* getRandomHex32
* getRandomString
* getUid4
* getUid8
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
* lispCaseToPascalCase
* lispCaseToSnakeCase
* minifyString
* moustache
* newlinesToSpaces
* normalizeClassname
* normalizeColor
* normalizeText
* pascalCaseToCamelCase
* pascalCaseToLispCase
* pascalCaseToSnakeCase
* randomColor
* removeNewlines
* removeNonAlpha
* removeNonAlphaNumeric
* removeNonAscii
* removeNonNumeric
* removeNumeric
* removeTags
* removeWhitespace
* rot13
* snakeCaseToCamelCase
* snakeCaseToLispCase
* snakeCaseToPascalCase
* stripHref
* stripPunctuation
* toHttp
* toHttps
* trimHash
* trimSpaces
* truncate
* unescapeHtml

### node

* atob
* btoa
* colorize
* findPort
* getArgs
* getDiskUsage
* getFreeMemory
* getHostname
* getIsNode
* getLoadAverage
* getMemoryUsage
* getNodeModules
* getPlatform
* getTerminalColumns
* getTerminalRows
* getTerminalSize
* getUserHome
* getUserShell
* hasColor
* isInstalled
* logWithInfo
* notFound
* open
* readFileSync
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
* pick
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
* takeLast
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
* isBuffer
* isDate
* isDefined
* isDomElement
* isEmpty
* isError
* isEven
* isFloat
* isFunction
* isInteger
* isJson
* isNan
* isNegative
* isNodeList
* isNull
* isNullOrUndefined
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
* isSymbol
* isType
* isUndefined
* objectToString
* toType
* typeOf

### misc

* average
* chunk
* cloneWithout
* copy
* copyWithout
* countItemsInArray
* deepCopy
* diff
* dir
* doubleUntil
* filterFloat
* flatten
* flattenAndUniq
* getBrokenImage
* getKeyByValue
* getKeyCodes
* getNiceDate
* getOrdinal
* getTransparentGif
* greater
* greatestCommonDivisor
* invoker
* isObjectEmpty
* leastCommonMultiple
* leftPad
* lesser
* levenshteinDistance
* lexSort
* logWithTimestamp
* maximum
* maybeArgs
* merge
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
* scaleToFit
* shallowCopy
* shuffle
* sleep
* splitStringOn
* sum
* tap
* throwError
* timeTest
* transpose
* transposeFlat
* tryExecNTimes
* uniq
* unless
* xor
