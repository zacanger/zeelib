// @flow

/**
 * Collect an an array of objects by string key
 * cred: gh:uniqname
 * @example
 * const data = [ { foo: 'a', bar: 'baz' }, { foo: 'b', bar: 'quux' }, { foo: 'a', bar: 'whatever' } ]
 * groupBy('foo')(data) // => { a: { foo: 'a', bar: 'whatever' }, b: { foo: 'b', bar: 'quux' } }
 */

const groupBy = (p: string) =>
  (a: any[]): Object =>
    a.reduce((c, i) => ({
      ...c, [i[p]]: i
    }), {})

export default groupBy
