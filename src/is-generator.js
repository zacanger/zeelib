// @flow

/**
 * Returns true if passed val is a generator
 * @example
 * isGenerator(2) // => false
 */

const isGenerator = (v: any): bool =>
  v && typeof v.next === 'function' && typeof v.throw === 'function'

export default isGenerator
