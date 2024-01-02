/**
 * Range function
 *
 * Takes a start and and end,
 * and a step (defaults to 1).
 *
 * This is _inclusive_. That is:
 * `1..10,2 == 0,2,4,6,8,10`
 * @example
 * range(1, 4) // => [ 1, 2, 3, 4 ]
 * range(1, 10, 3) // => [ 1, 4, 7, 10 ]
 */

export const range = (a: number, b: number, step: number = 1): number[] => {
  const length = Math.floor((b - a) / step)

  if (length < 0) {
    throw new Error('Invalid range')
  }

  const arr: number[] = Array.from({ length })

  for (let i: number = 0; i <= length; i++) {
    arr[i] = a + (i * step)
  }

  return arr
}
