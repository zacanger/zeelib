// @flow

/**
 * Returns true if code is in Node
 * @example
 * isNode()
 */

const isNode = (): bool =>
  process && !!process.version

export default isNode
