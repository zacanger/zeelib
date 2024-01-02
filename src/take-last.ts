/**
 * Takes the last n items of array
 * @example
 * takeLast(2, [ 1, 2, 3, 4 ]) // => [ 3, 4 ]
 */

export const takeLast = <A>(num: number, arr: A[]): A[] => {
  const array = arr.reverse()
  const alen = array.length
  if (num > alen) return array
  const a1 = []
  for (let i: number = 0; i < num && i < alen; i++) {
    a1.push(array[i])
  }
  return a1.reverse()
}
