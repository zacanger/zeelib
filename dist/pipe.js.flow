// @flow

import reduce from './reduce'

/**
 * Left to right composition
 * @example
 * const addOne = (a) => a + 1
 * const timesTwo = (a) => a * 2
 * pipe(addOne, timesTwo)(2) // => 6
 */

const pipe = (...fns: any): any =>
  (data: any) =>
    reduce((v: any, fn: any): any =>
      fn(v), data)(fns)

export default pipe
