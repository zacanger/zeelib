// @flow

/**
 * Diff two arrays
 * @example
 * diff([ 1, 2, 3 ], [ 2, 3 ]) // => [ 1 ]
 */

const diff = (a: any[], b: ?any[]): any[] => {
  const arr = []
  let len: number = a.length

  if (!b) {
    return a
  }

  while (len--) {
    if (b.indexOf(a[len]) === -1) {
      arr.unshift(a[len])
    }
  }

  return arr
}

export default diff
