// @flow

/**
 * Simple xor
 * @example
 * xor(1, 1) // => false
 * xor(1, !1) // => true
 */

const xor = <A, B>(a: A, b: B): bool =>
  !a !== !b

export default xor
