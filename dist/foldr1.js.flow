// @flow

/**
 * Takes last two items of list, applies fn,
 * then third-last and previous result,
 * etc.
 * @example
 * foldr1(increment, [ 1, 1, 1 ]) // => 3
 */

const foldr1 = (
  f: () => any,
  a: any[]
): any => {
  let s = a[a.length - 1]
  for (let i = a.length - 2; i >= 0; i--) {
    s = f(s, a[i])
  }
  return s
}

export default foldr1
