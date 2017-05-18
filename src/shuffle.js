// @flow

/**
 * Randomly shuffle items in array
 */

const shuffle = (a: any[]): any[] => {
  for (let i = a.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let temp = a[i]
    a[i] = a[j]
    a[j] = temp
  }
  return a
}

export default shuffle
