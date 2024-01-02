// TODO?: make variadic

/**
 * Takes a list of pairs
 * and returns two lists of first and second elements
 * @example
 * unzip([ [ 1, 1 ], [ 2, 2 ]]) // => [ [ 1, 2 ], [ 1, 2 ] ]
 */

export const unzip = <A, B>(xs: Array<[A, B]>): [A[], B[]] => {
  const as: A[] = []
  const bs: B[] = []
  xs.forEach((x, i): void => {
    as[i] = x[0]
    bs[i] = x[1]
  })
  return [ as, bs ]
}
