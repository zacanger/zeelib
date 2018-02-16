// @flow

import reduce from './reduce'

/**
 * Left to right composition
 * @example
 * const addOne = (a) => a + 1
 * const timesTwo = (a) => a * 2
 * pipe(addOne, timesTwo)(2) // => 6
 */

/* eslint-disable no-redeclare, max-len, flowtype/require-return-type */
declare function pipe<A, T>((A) => T): (A) => T
declare function pipe<A, B, T>((A) => B, (B) => T): T
declare function pipe<A, B, C, T>((A) => B, (B) => C, (C) => T): T
declare function pipe<A, B, C, D, T>((A) => B, (B) => C, (C) => D, (D) => T): T
declare function pipe<A, B, C, D, E, T>((A) => B, (B) => C, (C) => D, (D) => E, (E) => T): T
declare function pipe<A, B, C, D, E, F, T>((A) => B, (B) => C, (C) => D, (D) => E, (E) => F, (F) => T): T
declare function pipe<A, B, C, D, E, F, G, T>((A) => B, (B) => C, (C) => D, (D) => E, (E) => F, (F) => G, (G) => T): T
declare function pipe(Function): Function

function pipe (...fns) {
  return (data) => reduce((v, fn) => fn(v))(data)(fns)
}
/* eslint-enable no-redeclare, max-len, flowtype/require-return-type */

export default pipe
