// @flow

/**
 * Takes the last n items of array
 * @example
 * takeLast(2, [ 1, 2, 3, 4 ]) // => [ 3, 4 ]
 */

const takeLast = (num: number, arr: any[]): any[] => {
  arr = arr.reverse()
  const alen = arr.length
  if (num > alen) return arr
  const a1 = []
  for (let i = 0; i < num && i < alen; i++) {
    a1.push(arr[i])
  }
  return a1.reverse()
}

export default takeLast
