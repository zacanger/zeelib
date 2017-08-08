// @flow

/**
 * Uniq an array by a string key of objects in array
 * Returns only the values of the passed key
 * @example
 * const a = [ { foo: 'foo' }, { foo: 'bar' }, { foo: 'foo' } ]
 * uniqBy('foo')(a) // => [ 'foo', 'bar' ]
 */

const uniqBy = (key: string) => (arr: Object[]): any[] =>
  [ ...new Set(arr.map((a) => a[key])) ]

export default uniqBy
