// @flow

/**
 * Uniq an array
 */

const uniq = (arr: any[]): any[] =>
  [ ...new Set(arr) ]

export default uniq
