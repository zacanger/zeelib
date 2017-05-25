* `0.8.0` &mdash; **2017-05-24** &mdash; *breaking* &mdash; several changes
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
* `0.7.0` &mdash; **2017-04-05** &mdash; *important* &mdash; If you've installed in the past eight days (since `0.6.17` **2017-03-28**), you're probably
  seeing a lot of annoying logs! I did something dumb. Please update!
* `0.6.0` &mdash; **2017-03-14** &mdash; *breaking* &mdash; `base64BufferDec` and `base64BufferEnc` are now `btoa` and `atob`
* `0.5.0` &mdash; **2017-03-11** &mdash; *breaking* &mdash; `hexRegex` is now a function, `getHexRegex`
* `0.4.0` &mdash; **2017-02-19** &mdash; *breaking* &mdash; no longer `require('zeelib').default`, just `require('zeelib')`
* `0.2.0` &mdash; **2017-01-30** &mdash; *breaking* &mdash; all functions now in top level
  * (No more `import { fp } from 'zeelib'` to use `zipWith`, just `import { zipWith } from 'zeelib'`)
