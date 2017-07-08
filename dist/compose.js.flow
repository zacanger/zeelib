// @flow

import pipe from './pipe'
import reverse from './reverse'

/**
 * Right to left composition
 * @example
 * const addOne = (a) => a + 1
 * const timesTwo = (a) => a * 2
 * compose(addOne, timesTwo)(2) // => 5
 */

const compose = (...fns: any): any =>
  pipe(...reverse(fns))

export default compose
