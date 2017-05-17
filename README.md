## zeelib

A small lib of FP, Node, and DOM utils.

Changes:

* `0.7.0` &mdash; *important* &mdash; If you've installed in the past eight days (since `0.6.17`), you're probably
  seeing a lot of annoying logs! I did something dumb. Please update!
* `0.6.0` &mdash; *breaking* &mdash; `base64BufferDec` and `base64BufferEnc` are now `btoa` and `atob`
* `0.5.0` &mdash; *breaking* &mdash; `hexRegex` is now a function, `getHexRegex`
* `0.4.0` &mdash; *breaking* &mdash; no longer `require('zeelib').default`, just `require('zeelib')`
* `0.2.0` &mdash; *breaking* &mdash; all functions now in top level
  * (No more `import { fp } from 'zeelib'` to use `zipWith`, just `import { zipWith } from 'zeelib'`)

Just a load of small utilities.

There's a full list at the bottom of this file.

Documentation is mostly just function names. Sorry.

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

* eventOnce
* getCookie
* getElementOffset
* getElementPosition
* getElementText
* getHeight
* getIsBrowser
* getLengthOfElements
* getReferrer
* getScrollBarWidth
* getWidth
* removeAttribute
* restoreScrollPosition
* scrollTop
* setAttribute

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
* collapseNewlines
* collapseWhitespace
* combineRegex
* cssToJson
* escapeForXpath
* escapeHtml
* fixWindowsSlashes
* formatMs
* getComplimentaryColors
* getHexRegex
* getQueryFromSearch
* getRandomHex32
* getRandomString
* getRegexFlags
* getUid4
* getUid8
* indenter
* inlineString
* isAlphaNumeric
* isEmoji
* isEmptyString
* isHexBased
* isMobileOrTablet
* isStringSomewhereInArray
* isValidEmail
* isValidHex
* isValidRegex
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
* rgbToHex
* rot13
* safeDecodeURI
* safeDecodeURIComponent
* snakeCaseToCamelCase
* snakeCaseToLispCase
* snakeCaseToPascalCase
* stripHref
* stripPunctuation
* stripSubdomain
* toHttp
* toHttps
* trimHash
* trimSpaces
* truncate
* unescapeHtml

### node

* atob
* btoa
* checkForFile
* colorize
* consoleClear
* consoleGroup
* consoleGroupEnd
* execute
* exit
* findPort
* getArgs
* getBasename
* getDiskUsage
* getFreeMemory
* getFileExt
* getHashFromSystem
* getHostname
* getIsNode
* getLoadAverage
* getMemoryUsage
* getNodeModules
* getPlatform
* getRelativePath
* getTerminalColumns
* getTerminalRows
* getTerminalSize
* getUserHome
* getUserShell
* hasColor
* isDirectory
* isFile
* isInstalled
* isSymLink
* logWithInfo
* makeFileIfNoFile
* notFound
* open
* readFileSync
* readJson
* readJsonSync
* resolveFiles
* termPrompt
* timeRequire
* tinyRouter
* watch
* writeError
* writeJson
* writeJsonSync

### fp utils

* all
* and
* any
* apply
* caar
* cadr
* car
* cdar
* cddr
* cdr
* clone
* collectBy
* compose
* concat
* concatMap
* cons
* constant
* curry
* curry2
* curry3
* curry4
* drop
* dropWhere
* dropWhile
* each
* elem
* eq
* filter
* findIndex
* findWhere
* flip
* foldl
* foldl1
* foldr
* foldr1
* getFunctionArguments
* head
* id
* init
* invoke
* juxt
* last
* length
* lines
* list
* map
* memoize
* mix
* not
* notElem
* nth
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
* uncurry
* unfold
* unlines
* unwords
* unzip
* unzip3
* where
* words
* zip
* zip3
* zipThen
* zipWith
* zipWith3

### types

* checkIs
* is
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
* toBool
* toBoolInverse
* toObject
* toType
* typeOf

### misc

* ago
* assert
* average
* calc
* chunk
* clamp
* cloneWithout
* contains
* copy
* copyWithout
* countItemsInArray
* debounce
* deepCopy
* diff
* dir
* doubleUntil
* filterFloat
* flatten
* flattenAndUniq
* generateSequence
* getBrokenImage
* getKeyByValue
* getKeyCodes
* getLengthOfCharactersInString
* getLengthOfItemsInArray
* getMethodsOf
* getNiceDate
* getNow
* getOrdinal
* getTitle
* getTransparentGif
* greater
* greatestCommonDivisor
* imul
* inherits
* intersection
* invoker
* isObjectEmpty
* keys
* leastCommonMultiple
* leftPad
* lesser
* levenshteinDistance
* lexSort
* logWithTimestamp
* makeThunk
* maximum
* maybeArgs
* merge
* minimum
* nco
* noSwitch
* noop
* objectAssign
* objectClone
* objectFromEntries
* objectInherit
* product
* range
* reverseDigits
* reverseSign
* safeGet
* scaleToFit
* setTitle
* shallowCopy
* shuffle
* sizeOf
* sleep
* slice
* splitStringOn
* store
* sum
* tap
* throttle
* throwError
* timeTest
* toMap
* transpose
* transposeFlat
* tryExecNTimes
* uniq
* unless
* xor
