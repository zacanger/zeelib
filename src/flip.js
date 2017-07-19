// @flow

/**
 * Flips order of received arguments and calls f.
 * @example
 * const minus = (a) => (b) => a - b
 * minus(2)(1) // => 1
 * flip(minus)(2)(1) // => -1
 */

const flip = (f: (any) => any): any =>
  (a: any) =>
    (b: any) =>
      f(b)(a)

export default flip
