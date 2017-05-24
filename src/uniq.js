// @flow

/**
 * Uniq an array
 */

const uniq = (a: any[]): any[] =>
  [ ...new Set(a) ]

export default uniq
