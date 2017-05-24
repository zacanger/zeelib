// @flow

/**
 * Diff two arrays
 */

const diff = (a: any[], b: ?any[]): any[] => {
  const arr = []
  let len = a.length

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
