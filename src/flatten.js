// @flow

/**
 * Recursively flatten arrays
 */

const flatten = (a: any[]): any[] =>
  Array.isArray(a) ? [].concat(...a.map(flatten)) : a

export default flatten
