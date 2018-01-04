// @flow

/**
 * Takes a function and two lists
 *
 * Returns a list made by calling the function
 * on the elements of each list in the same position
 * @example
 * zipWith(increment, [ 1, 1 ], [ 1, 1 ]) // => [ 2, 2 ]
 */

const zipWith = <A, B, T>(
  fn: (A, B) => T,
  xs: A[],
  ys: B[]
): T[] => {
  const length = Math.min(xs.length, ys.length)
  // eslint-disable-next-line flowtype/no-weak-types
  const result: T[] = (Array.from({ length }): any)
  for (let i: number = 0; i < length; i++) {
    result[i] = fn(xs[i], ys[i])
  }
  return result
}

export default zipWith
