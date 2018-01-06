// @flow

/**
 * Until p f yields result of applying f until p holds
 * @example
 * until(equals5, increment)(2) // => 5
 */

const until = <A>(p: (A) => bool, f: (A) => A) =>
  (t: A): A => {
    let r: A = f(t)
    do {
      r = f(t)
    } while (!p(r))
    return r
  }

export default until
