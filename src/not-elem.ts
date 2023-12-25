import elem from './elem'

/**
 * The opposite of `elem`
 *
 * Returns true if the element is not in the string or array
 * @example
 * notElem('a', 'asdf') // => false
 * notElem('b', 'asdf') // => true
 */

const notElem = <T> (el: T & string, ls: string | T[]): boolean =>
  !elem(el, ls)

export default notElem
