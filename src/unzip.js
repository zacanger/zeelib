// @flow

/**
 * Takes a list of pairs
 * and returns two lists of first and second elements
 * @example
 * unzip([ [ 1, 1 ], [ 2, 2 ]]) // => [ [ 1, 2 ], [ 1, 2 ] ]
 */

const unzip = <A, B>(xs: [A, B][]): [A[], B[]] => {
  const length = xs.length
  const as: A[] = (Array.from({ length }): any) // eslint-disable-line flowtype/no-weak-types
  const bs: B[] = (Array.from({ length }): any) // eslint-disable-line flowtype/no-weak-types
  xs.forEach((x, i): void => {
    as[i] = x[0]
    bs[i] = x[1]
  })
  return [ as, bs ]
}

export default unzip
