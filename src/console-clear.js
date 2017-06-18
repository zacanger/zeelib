// @flow

import getIsNode from './get-is-node'
/**
 * `console.clear` for Node and browser
 * @example
 * consoleClear() // => undefined
 */

const consoleClear = (): void =>
  getIsNode()
    ? console.log('\x1Bc')
    : console.clear()

export default consoleClear
