/**
 * Flips order of received arguments and calls f.
 * @example
 * const minus = (a, b) => a - b
 * minus(2, 1) // => 1
 * flip(minus)(2, 1) // => -1
 */

export const flip = (f: (...xs: any[]) => any) =>
  (...args: any[]) =>
    f.apply(this, args.reverse())
