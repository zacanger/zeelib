// @flow

/**
 * Takes a list of pairs
 * and returns two lists of first and second elements
 * @example
 * unzip([ [ 1, 1 ], [ 2, 2 ]]) // => [ [ 1, 2 ], [ 1, 2 ] ]
 */

const unzip = (xs: any[]): Array<any[]> => {
  const a2 = []
  const a3 = []
  xs.forEach((_, i) => {
    a2.push(xs[i][0])
    a3.push(xs[i][1])
  })
  return [ a2, a3 ]
}

export default unzip
