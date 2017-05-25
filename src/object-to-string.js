// @flow

/**
 * `toString`
 */

const objectToString = (v: any): string =>
  Object.prototype.toString.call(v)

export default objectToString
