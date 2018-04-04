// @flow

/**
 * Make a list out of all arguments
 * @example
 * list(1, 2, 3) // => [ 1, 2, 3 ]
 */

const list = <T>(...args: T[]): T[] =>
  [ ...args ]

export default list
