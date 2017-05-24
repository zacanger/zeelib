// @flow

/**
 * Applies f with second arg and last item of list,
 * then again with next-last item, etc.
 */

const foldr = (
  f: () => any,
  s: any,
  a: any[]
): any => {
  for (let i = a.length - 1; i >= 0; i--) {
    s = f(s, a[i])
  }
  return s
}

export default foldr
