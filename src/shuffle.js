// @flow

/**
 * Randomly shuffle items in array
 * @example
 * shuffle([ 1, 2, 3, 4 ])
 */

const shuffle = (arr: any[]): any[] => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  return arr
}

export default shuffle
