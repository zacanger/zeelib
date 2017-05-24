// @flow

/**
 * Like Haskell's `take`
 */

const take = (num: number, arr: any[]): any[] => {
  const alen = arr.length
  if (num > alen) return arr
  const a1 = []
  for (let i = 0; i < num && i < alen; i++) {
    a1.push(arr[i])
  }
  return a1
}

export default take
