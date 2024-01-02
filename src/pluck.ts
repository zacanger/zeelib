/**
 * Simple `pluck`
 * @example
 * pluck('a', [ { a: 'a' }, { a: 'b' } ]) // => [ 'a', 'b' ]
 */

export const pluck = (key: string, arr: any[]): any[] =>
  arr.map((obj) => obj[key])
