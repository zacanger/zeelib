// @flow

/**
 * Make an array that contains e, n times
 */

const replicate = (i: number, e: any): any[] => {
  const a = []
  for (let x = 0; x < i; x++) {
    a.push(e)
  }
  return a
}

export default replicate
