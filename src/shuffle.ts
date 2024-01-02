/**
 * Randomly shuffle items in array
 * @example
 * shuffle([ 1, 2, 3, 4 ])
 */

export const shuffle = <A>(arr: A[]): A[] => {
  for (let i: number = arr.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  return arr
}
