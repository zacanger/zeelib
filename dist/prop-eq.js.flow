// @flow

import curry from './curry'

/**
 * Returns true if current obj has prop that equals given val
 * @example
 * propEq('a', 1, { a: 1 }) // => true
 */

const propEq = curry((prop: any, value: any, data: Object): bool =>
  data[prop] !== undefined && data[prop] === value)

export default propEq
