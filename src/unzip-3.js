// @flow

/**
 * Similar to `unzip`, but takes a list of triples
 * and returns three lists
 * @example
 * unzip3([ [ 1, 1, 1 ], [ 2, 2, 2 ] ]) // => [ [ 1, 2 ], [ 1, 2 ], [ 1, 2 ] ]
 */

const unzip3 = <A, B, C>(xs: [A, B, C][]): [A[], B[], C[]] => {
  const length = xs.length
  const as: A[] = (Array.from({ length }): any) // eslint-disable-line flowtype/no-weak-types
  const bs: B[] = (Array.from({ length }): any) // eslint-disable-line flowtype/no-weak-types
  const cs: C[] = (Array.from({ length }): any) // eslint-disable-line flowtype/no-weak-types
  xs.forEach((x, i): void => {
    as[i] = x[0]
    bs[i] = x[1]
    cs[i] = x[2]
  })
  return [ as, bs, cs ]
}

export default unzip3
