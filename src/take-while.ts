/**
 * Returns elements that pass predicate,
 * until failure (ignores matches after failure)
 * @example
 * takeWhile((x) => x < 3, [ 1, 2, 3, 4 ]) // => [ 1, 2 ]
 */

export const takeWhile = <A>(
  pred: (a: A, n: number) => boolean,
  arr: A[],
): A[] => {
  let stop: number = arr.length
  arr.some((n, idx) =>
    pred(n, idx) ? false : ((stop = idx), true))
  return arr.slice(0, stop)
}
