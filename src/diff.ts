/**
 * Diff two arrays
 * @example
 * diff([ 1, 2, 3 ], [ 2, 3 ]) // => [ 1 ]
 */

export const diff = <T>(a: T[], b: T[]): T[] => {
  const arr = []
  let len: number = a.length

  while (len--) {
    if (!b.includes(a[len])) {
      arr.unshift(a[len])
    }
  }

  return arr
}
