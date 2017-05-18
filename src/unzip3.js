// @flow

/**
 * Similar to `unzip`, but takes a list of triples
 * and returns three lists
 */

const unzip3 = (a1: any[]) => {
  const a2 = []
  const a3 = []
  const a4 = []
  a1.forEach((_, i) => {
    a2.push(a1[i][0])
    a3.push(a1[i][1])
    a4.push(a1[i][2])
  })
  return [ a2, a3, a4 ]
}

export default unzip3
