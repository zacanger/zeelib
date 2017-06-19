// @flow

/**
 * Returns an array with all falsey values removed
 * @example
 * compact([ 'a', null, '', 2]) // => [ 'a', 2 ]
 */

const compact = (a: any[]): any[] =>
  a.filter((v) => v)

export default compact
