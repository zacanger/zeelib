// @flow

/**
 * Until p f yields result of applying f until p holds
 * @example
 * until(equals5, increment)(2) // => 5
 */

const until = (p: (any) => bool, f: (any) => any) =>
  (...args: any[]) => {
    const r = f(...args)
    return p(r) ? r : until(p, f)(r)
  }
export default until
