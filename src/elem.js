// @flow

/**
 * Check if a string or array contains an element
 * @example
 * elem('a', 'asdf') // => true
 * elem('a', 'asdf'.split('')) // => true
 */

const elem = (el: any, ls: string | any[]): bool =>
  ls.includes(el)

export default elem
