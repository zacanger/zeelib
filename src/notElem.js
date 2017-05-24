// @flow

import elem from './elem'

/**
 * The inverse of `elem`, here because of Haskell's `notElem`
 * Like `!contains`, with reversed args
 */

const notElem = (el: any, ls: string | any[]): bool =>
  !elem(el, ls)

export default notElem
