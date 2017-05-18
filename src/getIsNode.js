// @flow

/**
 * Returns true if code is in Node
 */

const getIsNode = (): bool =>
  process && !!process.version

export default getIsNode
