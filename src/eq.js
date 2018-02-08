// @flow

/**
 * `eq`
 * @example
 * eq(1, 1) // => true
 * eq({ a: 'b' }, { b: 'a' }) // => false
 */

const eq = (a: mixed, b: mixed): bool =>
  a === b
    ? true
    : (a === undefined || b === undefined)
      ? false
      : JSON.stringify(a) === JSON.stringify(b)

export default eq
