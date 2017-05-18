// @flow

import elem from './elem'

/**
 * The inverse of `elem`, here because of Haskell's `notElem`
 * Like `!contains`, with reversed args
 */

const notElem = (el: any, a: string | any[]): bool =>
  !elem(el, a)

export default notElem
