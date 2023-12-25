import pipe from './pipe'

/**
 * Right to left composition
 * @example
 * const addOne = (a) => a + 1
 * const timesTwo = (a) => a * 2
 * compose(addOne, timesTwo)(2) // => 5
 */

const compose = <T>(...fns: Array<(t: T) => T>): ((t: T) => T) =>
  pipe(...[ ...fns ].reverse())

export default compose
