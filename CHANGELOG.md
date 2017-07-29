* `2.0.0` &mdash; **2017-07-29** &mdash; *breaking*
  * Moved `/dist` to `/lib`, and gitignored it
  * Refactored `safeGet`, which now takes an access string first and an optional
    fallback, then the object.
  * Renamed `collectBy` to `groupBy`
  * Removed deprecated functions:
    * `arity` (use `length`)
    * `checkIs` (use `is` with your own error if you need one)
    * `fixWindowsSlashes` (use the `slash` lib)
    * `getHashFromDate` (use a proper uuid lib)
    * `getHashFromSystem` (use a proper uuid lib)
    * `getNiceTime`
    * `getRandomHex32` (use a proper uuid lib)
    * `getRandomString` (use a proper uuid lib)
    * `getUid4` (use a proper uuid lib)
    * `getUid8` (use a proper uuid lib)
    * `inlineString`
    * `invoker`
    * `levenshteinDistance`
    * `logWithTimestamp`
    * `makeThunk`
    * `minifyString`
    * `normalizeText`
    * `reverseDigits`
    * `rot13`
    * `sizeOf` (use the `sizeof` lib)
    * `store`
    * `timeRequire` (use the `node-require-timings` lib)
* `1.1.14` &mdash; **2017-07-25**
  * Deprecated `makeThunk`
* `1.1.10` &mdash; **2017-07-20**
  * Deprecated `arity` (use `length`)
* `1.1.4` &mdash; **2017-07-18**
  * Deprecated `sizeOf`
* `1.1.3` &mdash; **2017-07-14**
  * Deprecated the following functions (will be removed in `2.0.0`):
  * `fixWindowsSlashes`
  * `levenshteinDistance`
  * `timeRequire`
* `1.0.3` &mdash; **2017-06-28**
  * Fixed `hasColor` to be a function
  * Fixed some issues in the docs
  * Removed following deprecated functions I missed in `1.0.0`:
    * `invoke`
    * `toMap`
    * `toType`
    * `transposeFlat`
    * `transpose`
* `1.0.0` &mdash; **2017-06-28** &mdash; *breaking*
  * `unless` argument order switched (now `cond, fn`)
  * Documentation moved [here](https://zacanger.github.io/zeelib/)
  * All previously deprecated functions removed. These are:
    * `clamp`
    * `combineRegex`
    * `compact`
    * `contains`
    * `copyWithout`
    * `copy`
    * `cssToJson`
    * `curry2`
    * `curry3`
    * `curry4`
    * `debounce`
    * `deepCopy`
    * `dropWhere`
    * `generateSequence`
    * `getBrokenImage`
    * `getComplimentaryColors`
    * `getFunctionArguments`
    * `getIsBrowser`
    * `getIsNode`
    * `greatestCommonDivisor`
    * `head`
    * `imul`
    * `indenter`
    * `inherits`
    * `isEmptyString`
    * `isInteger`
    * `isObjectEmpty`
    * `isObjectEqual`
    * `isType`
    * `keys`
    * `leastCommonMultiple`
    * `moustache`
    * `newlinesToSpaces`
    * `noSwitch`
    * `normalizeClassname`
    * `normalizeColor`
    * `notContains`
    * `objectAssign`
    * `objectClone`
    * `objectInherit`
    * `promiseGuard`
    * `removeWhitespace`
    * `shallowCopy`
    * `stripHref`
    * `stripPunctuation`
    * `stripSubdomain`
    * `tail`
    * `throttle`
    * `tinyRouter`
    * `toHttp`
    * `toHttps`
    * `toObject`
    * `tryExecNTimes`
    * `unfold`
    * `uniqAndFlatten`
    * `where`
    * `zipThen`
* `0.9.21` &mdash; **2017-06-26** &mdash; *breaking*
  * More deprecations
  * Removed `isValidRegex`, which was broken
* `0.9.19` &mdash; **2017-06-18** &mdash; *breaking*
  * More deprecations
  * Flipped order of `nth`s arguments
* `0.9.17` &mdash; **2017-06-15** &mdash; *breaking*
  * Some functions have had their argument order flipped to be more easily
    curryable. These are:
    * `filter`
    * `unless`
* `0.9.12` &mdash; **2017-06-13** &mdash; *important*
  * `curry` was broken in a weird way since `0.9.6` **2017-06-07**. I'm sorry.
    It's fixed now.
* `0.9.0` &mdash; **2017-05-27** &mdash; *breaking*
  * All filenames are now `lisp-cased`, so if you import them directly you
    may need to change your imports.
  * `objectToString` now `call`s, instead of needing to do that everywhere it's
    used
  * Deprecated `uniqAndFlatten`
* `0.8.3` &mdash; **2017-05-25** &mdash; *important*
  * Deprecations:
    * `contains` (use `elem`)
    * `curry2`, `curry3`, `curry4` (use `curry`)
    * `head` (use `car`)
    * `imul` (use `Math.imul`)
    * `isInteger` (use `Number.isInteger`)
    * `keys` (use `Object.keys`)
    * `moustache` (use template literals)
    * `newlinesToSpaces` (use `collapseWhitespace`)
    * `notContains` (use `notElem`)
    * `objectAssign` (use `Object.assign`)
    * `objectClone` (use `clone`)
    * `tail` (use `cdr`)
* `0.8.0` &mdash; **2017-05-24** &mdash; *breaking*
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
* `0.7.0` &mdash; **2017-04-05** &mdash; *important*
  * If you've installed in the past eight days (since `0.6.17` **2017-03-28**), you're
    probably seeing a lot of annoying logs! I did something dumb. Please update!
* `0.6.0` &mdash; **2017-03-14** &mdash; *breaking*
  * `base64BufferDec` and `base64BufferEnc` are now `btoa` and `atob`
* `0.5.0` &mdash; **2017-03-11** &mdash; *breaking*
  * `hexRegex` is now a function, `getHexRegex`
* `0.4.0` &mdash; **2017-02-19** &mdash; *breaking*
  * No longer `require('zeelib').default`, just `require('zeelib')`
* `0.2.0` &mdash; **2017-01-30** &mdash; *breaking*
  * All functions now in top level (no more `import { fp } from 'zeelib'`
    to use `zipWith`, just `import { zipWith } from 'zeelib'`).
