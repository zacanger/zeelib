// @flow

/**
 * Returns true if code is in Node
 * @example
 * getIsNode()
 */

const getIsNode = (): bool =>
  process && !!process.version

export default getIsNode
