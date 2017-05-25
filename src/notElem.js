// @flow

import elem from './elem'

/**
 * The opposite of `elem`
 * Returns true if the element is not in the string or array
 */

const notElem = (el: any, ls: string | any[]): bool =>
  !elem(el, ls)

export default notElem
