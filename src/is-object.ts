/**
 * Returns true if the value is an object
 * @example
 * isObject('asdf') // => false
 */

const isObject = (v: any): boolean =>
  v !== null &&
  typeof v === 'object' &&
  Object.getPrototypeOf(v) === Object.prototype

export default isObject
