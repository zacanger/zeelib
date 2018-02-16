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
  let inc = s
  for (let i: number = a.length - 1; i >= 0; i--) {
    inc = f(inc, a[i])
  }
  return inc
}

export default foldr
