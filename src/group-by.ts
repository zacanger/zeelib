import { type AnyMap } from './types'

/**
 * Collect an an array of objects by string key
 * @example
 * const data = [ { foo: 'a', bar: 'baz' }, { foo: 'b', bar: 'quux' }, { foo: 'a', bar: 'whatever' } ]
 * groupBy('foo')(data) // => { a: { foo: 'a', bar: 'whatever' }, b: { foo: 'b', bar: 'quux' } }
 */

/** @deprecated we have this in es2024 now */
export const groupBy = (p: string) =>
  (a: any[]): AnyMap =>
    a.reduce((c, i) => ({
      ...c, [i[p]]: i,
    }), {})
