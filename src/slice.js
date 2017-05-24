// @flow

/**
 * `[].slice` util
 */

const slice = (arr: any[], from: number, to: ?number): any[] =>
  [].slice.call(arr, from, to || 1)

export default slice
