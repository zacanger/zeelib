// @flow

/**
 * Make an object from an array
 */

const toObject = (arr: any[]): Object =>
  arr.reduce((res, [ k, v ]) => ({ ...res, [k]: v }), {})

export default toObject
