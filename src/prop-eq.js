// @flow

import curry from './curry'

/**
 * Returns true if current obj has prop that equals given val
 */

const propEq = curry((prop: any, value: any, data: Object): bool =>
  data[prop] !== undefined && data[prop] === value)

export default propEq
