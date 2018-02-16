// @flow

/**
 * Applies f to second arg and first item of list,
 * then to next item, etc.
 * @example
 * foldl(increment, 1, [ 1, 1, 1 ]) // => 4
 */

const foldl = (
  f: (any, any) => any,
  s: any,
  a: any[]
): any => {
  let inc = s
  a.forEach((el) => {
    inc = f(inc, el)
  })
  return inc
}

export default foldl
