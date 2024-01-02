/**
 * Like Haskell's `drop`
 * @example
 * drop(2, [ 1, 2, 3 ]) // => 3
 */

export const drop = <A>(n: number, arr: A[]): A[] => {
  const alen = arr.length
  if (n < 1) return arr
  if (n > alen) return []
  const res = []
  for (let i: number = n; i < alen; i++) {
    res.push(arr[i])
  }
  return res
}
