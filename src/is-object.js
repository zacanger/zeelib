// @flow

/**
 * Returns true if the value is an object
 * @example
 * isObject('asdf') // => false
 */

const isObject = (v: mixed): bool =>
  v !== null &&
  typeof v === 'object' &&
  Object.getPrototypeOf(v) === Object.prototype

export default isObject
