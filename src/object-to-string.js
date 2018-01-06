// @flow

/**
 * `toString`
 * @example
 * objectToString({}) // => '[object Object]'
 */

const objectToString = (v: mixed): string =>
  Object.prototype.toString.call(v)

export default objectToString
