// @flow

/**
 * Make an array that contains e, n times
 */

const replicate = (num: number, el: any): any[] => {
  const a = []
  for (let x = 0; x < num; x++) {
    a.push(el)
  }
  return a
}

export default replicate
