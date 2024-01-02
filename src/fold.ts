/**
 * Applies f to first two items of list,
 * then to next, etc.
 * @example
 * foldl1(increment, [ 1, 1, 1 ]) // => 3
 */

export const fold = <T>(
  f: (x: T, y: T) => T,
  a: T[],
): T => {
  let s = a[0]
  for (let i: number = 1; i < a.length; i++) {
    s = f(s, a[i])
  }
  return s
}
