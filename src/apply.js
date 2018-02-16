// @flow

/**
 * Applies f to any number of args
 * @example
 * apply(lessThanThree, 1) // => true
 */

const apply = <T>(f: (*) => T, ...args: *[]): T =>
  f(...args)

export default apply
