// @flow

/**
 * Simple `pluck`
 * @example
 * pluck('a', [ { a: 'a' }, { a: 'b' } ]) // => [ 'a', 'b' ]
 */

const pluck = (key: string, arr: any[]): any[] =>
  arr.map((obj) => obj[key])

export default pluck
