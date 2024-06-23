/**
 * Check if a string or array contains an element
 * @example
 * elem('a', 'asdf') // => true
 * elem('a', 'asdf'.split('')) // => true
 */

/** @deprecated will be removed in v13 */
export const elem = <T>(el: string & T, ls: string | T[]): boolean =>
  ls.includes(el)
