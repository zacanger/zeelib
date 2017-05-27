// @flow

/**
 * Returns an array with all falsey values removed
 */

const compact = (a: any[]): any[] =>
  a.filter((v) => v)

export default compact
