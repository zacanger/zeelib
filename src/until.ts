/**
 * Until p f yields result of applying f until p holds
 * @example
 * until(equals5, increment)(2) // => 5
 */

const until = <T>(p: (x: T) => boolean, f: (...args: T[]) => T) =>
  (...args: T[]): T => {
    const r = f(...args)
    return p(r) ? r : until(p, f)(r)
  }

export default until
