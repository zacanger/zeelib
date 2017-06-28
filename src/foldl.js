// @flow

/**
 * Applies f to second arg and first item of list,
 * then to next item, etc.
 * @example
 * foldl(increment, 1, [ 1, 1, 1 ]) // => 4
 */

const foldl = (
  f: () => any,
  s: any,
  a: any[]
): any => {
  a.forEach((el) => {
    s = f(s, el)
  })
  return s
}

export default foldl
