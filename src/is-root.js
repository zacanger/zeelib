// @flow

import isNode from './is-node'

/**
 * Check if current process is running as root.
 * @example
 * isRoot() // => true
 */

const isRoot = (): bool =>
  isNode() &&
    (process.env.USER === 'root' || !!(process.getuid && process.getuid() === 0))

export default isRoot
