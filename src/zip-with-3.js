// @flow

/**
 * Takes a function and three lists
 *
 * Returns an array of elements calculated by
 * calling the function on the elements of
 * each list at the same position
 * @example
 * zipWith3(increment, [ 1, 1 ], [ 1, 1 ], [ 1, 1 ]) // => [ 2, 2, 2 ]
 */

const zipWith3 = <A, B, C, T>(
  fn: (A, B, C) => T,
  xs: A[],
  ys: B[],
  zs: C[]
): T[] => {
  const length = Math.min(xs.length, ys.length, zs.length)
  // eslint-disable-next-line flowtype/no-weak-types
  const result: T[] = (Array.from({ length }): any)
  for (let i: number = 0; i < length; i++) {
    result[i] = fn(xs[i], ys[i], zs[i])
  }
  return result
}

export default zipWith3
