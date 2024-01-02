/**
 * Unique an array by a string key of objects in array
 * Returns only the values of the passed key
 * @example
 * const a = [ { foo: 'foo' }, { foo: 'bar' }, { foo: 'foo' } ]
 * uniqBy('foo', a) // => [ { foo: 'foo' }, { foo: 'bar' } ]
 */

type AnyMap = Record<string, any>

export const uniqBy = (el: string, xs: AnyMap[]): AnyMap[] =>
  xs.filter((e: any, i: number) =>
    xs.findIndex((a: any) => a[el] === e[el]) === i)
