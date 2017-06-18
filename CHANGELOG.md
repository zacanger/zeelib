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
