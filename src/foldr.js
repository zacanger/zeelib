// @flow

/**
 * Applies f with second arg and last item of list,
 * then again with next-last item, etc.
 * @example
 * foldr(increment, 1, [ 1, 1, 1 ]) // => 4
 */

const foldr = (
  f: (any, any) => any,
  s: any,
  a: any[]
): any => {
  for (let i: number = a.length - 1; i >= 0; i--) {
    s = f(s, a[i])
  }
  return s
}

export default foldr
