/**
 * Simple xor
 * @example
 * xor(1, 1) // => false
 * xor(1, !1) // => true
 */

/** @deprecated will be removed in v13 */
export const xor = <A, B>(a: A, b: B): boolean =>
  !a !== !b
