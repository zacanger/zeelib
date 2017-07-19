// @flow

/**
 * Applies f to first two items of list,
 * then to next, etc.
 * @example
 * foldl1(increment, [ 1, 1, 1 ]) // => 3
 */

const foldl1 = (
  f: (any, any) => any,
  a: any[]
): any => {
  let s = a[0]
  for (let i = 1; i < a.length; i++) {
    s = f(s, a[i])
  }
  return s
}

export default foldl1
