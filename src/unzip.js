// @flow

/**
 * Takes a list of pairs
 * and returns two lists of first and second elements
 */

const unzip = (a1: any[]) => {
  const a2 = []
  const a3 = []
  a1.forEach((_, i) => {
    a2.push(a1[i][0])
    a3.push(a1[i][1])
  })
  return [ a2, a3 ]
}

export default unzip
