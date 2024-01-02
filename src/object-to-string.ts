/**
 * `toString`
 * @example
 * objectToString({}) // => '[object Object]'
 */

export const objectToString = (v: any): string =>
  Object.prototype.toString.call(v)
