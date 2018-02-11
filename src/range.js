// @flow

/**
 * Range function
 *
 * Takes a start and and end,
 * and a step (defaults to 1).
 *
 * This is _inclusive_. That is:
 * `1..10,2 == 0,2,4,6,8,10`
 * @param {number} a
 * @param {number} b
 * @param {number} step (optional, defaults to one)
 * @returns {number[]}
 * @example
 * range(1, 4) // => [ 1, 2, 3, 4 ]
 * range(1, 10, 3) // => [ 1, 4, 7, 10 ]
 */

const range = (a: number, b: number, step?: number = 1): number[] => {
  const length = Math.floor((b - a) / step)

  if (length < 0) {
    throw new Error('Invalid range')
  }

  // eslint-disable-next-line flowtype/no-weak-types
  const arr: number[] = (Array.from({ length }): any)

  for (let i: number = 0; i <= length; i++) {
    arr[i] = a + (i * step)
  }

  return arr
}

export default range
