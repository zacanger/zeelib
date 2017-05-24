// @flow

/**
 * Takes a val and returns fn that takes a val and returns true
 * if the two are not the same
 */

const not = (a: any) =>
  (b: any): bool =>
    a !== b

export default not
