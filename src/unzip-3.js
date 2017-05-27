// @flow

/**
 * Similar to `unzip`, but takes a list of triples
 * and returns three lists
 */

const unzip3 = (xs: any[]): Array<any[]> => {
  const a2 = []
  const a3 = []
  const a4 = []
  xs.forEach((_, i) => {
    a2.push(xs[i][0])
    a3.push(xs[i][1])
    a4.push(xs[i][2])
  })
  return [ a2, a3, a4 ]
}

export default unzip3
