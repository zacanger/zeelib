// @flow

/**
 * Make an object from an array
 */

const toObject = (a: any[]): Object =>
  a.reduce((res, [ k, v ]) => ({ ...res, [k]: v }), {})

export default toObject
