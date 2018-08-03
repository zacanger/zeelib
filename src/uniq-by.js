// @flow

/**
 * Unique an array by a string key of objects in array
 * Returns only the values of the passed key
 * @example
 * const a = [ { foo: 'foo' }, { foo: 'bar' }, { foo: 'foo' } ]
 * uniqBy('foo', a) // => [ { foo: 'foo' }, { foo: 'bar' } ]
 */

/* eslint-disable max-len */
// $FlowFixMe
const uniqBy = (el: string, xs: Array<{+[string]: mixed}>) =>
  xs.filter((e: mixed, i: number) => xs.findIndex((a: mixed) => a[el] === e[el]) === i)

export default uniqBy
