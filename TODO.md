* Remove anything that can be done with plain JS now
* Remove anything marked deprecated
* Replace all the foo-case-to-bar-case with a single case fn
* Minimize extraneous imports (avoid the lodash problem)
* Unit tests
    * Fix test coverage, and aim for > 90%
    * https://github.com/nodejs/help/issues/3902
    * https://www.npmjs.com/package/source-map-support
    * https://github.com/TypeStrong/ts-node/issues/807
    * https://github.com/privatenumber/tsx/issues/437
* Minimal `any`s
