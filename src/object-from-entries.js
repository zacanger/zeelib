// @flow

/**
 * Get an object from an array of entries
 * @example
 * objectFromEntries([ [ 'a', 'b' ] ]) // => { a: 'b' }
 */

// eslint-disable-next-line flowtype/no-weak-types
const objectFromEntries = <O: {+[string]: mixed}, K: $Keys<O>>(arr: [K, mixed][]): O =>
  // eslint-disable-next-line flowtype/no-weak-types
  arr.reduce((res, [ k, v ]) => ({ ...res, [k]: v }), (({}: any): O))

export default objectFromEntries
