// @flow

/**
 * Like Haskell's `drop`
 */

const drop = (n: number, arr: any[]): any[] => {
  const alen = arr.length
  if (n < 1) return arr
  if (n > alen) return []
  const res = []
  for (let i = n; i < alen; i++) {
    res.push(arr[i])
  }
  return res
}

export default drop
