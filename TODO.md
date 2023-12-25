* Revive this
* Move to promise API for any Node builtins
* Bring back anything useful from old versions
* Remove DOM-related stuff
* Ensure all functions have JSDocs with examples
* Update docs and changelog
* Get 100% coverage:
    * Unit tests
        * https://github.com/nodejs/help/issues/3902
    * Types
        * No ts-expect-errors
        * No `any`
    * No eslint-disables
* Aim for no useless imports (avoid the lodash problem)
* Aim for ES2024+/Node21+ compatibility only
* Remove anything that can be done with plain JS now
