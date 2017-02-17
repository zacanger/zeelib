## zeelib

A small lib of FP, Node, and DOM utils.

Changes:

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

If you're using `require` you'll need to do `require('zeelib').default`.

## License

[WTFPL](./LICENSE.md)

## Contributing

* Please run `npm test`.
* If you can, please _add_ a test.
* Please add your thing in these places:
  * `src/index.js` in the appropriate place
  * The full list below
* Make sure you run `npm run build`

## Full list:

### dom

* getCookie
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
* dir
* findPort
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
* compose
* curry
* each
* elem
* filter
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
* pair
* pipe
* pluck
* propEq
* reduce
* reverse
* span
* tail
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
* doubleUntil
* dropWhere
* filterFloat
* findWhere
* getBrokenImage
* getKeyByValue
* getNiceDate
* getTransparentGif
* greatestCommonDivisor
* invoker
* isObjectEmpty
* leastCommonMultiple
* leftPad
* lexSort
* lesser
* logWithTimestamp
* maybeArgs
* nco
* noSwitch
* objectAssign
* objectClone
* objectFromEntries
* objectInherit
* reverseDigits
* shallowCopy
* sleep
* splitStringOn
* tap
* throwError
* timeTest
* transpose
* transposeFlat
* tryExecNTimes
* unless
* xor
