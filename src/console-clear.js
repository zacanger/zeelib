// @flow

import isNode from './is-node'
/**
 * `console.clear` for Node and browser
 * @example
 * consoleClear() // => undefined
 */

const consoleClear = (): void =>
  isNode()
    ? console.log('\x1Bc')
    : console.clear()

export default consoleClear
