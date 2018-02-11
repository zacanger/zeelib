// @flow

/**
 * Find out how many of a given element is in
 * an array or string.
 * @example
 * countIn('a', 'abc') // => 1
 * countIn('a', [ 'a', 'b', 'c' ]) // => 1
 */

// $FlowFixMe
const countIn = <T> (el: T, ls: T[] | string): number => {
  const l = Array.isArray(ls) ? ls : ls.split('')
  return l.filter((a) => a === el).length
}

export default countIn
