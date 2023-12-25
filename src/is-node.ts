/**
 * Returns true if code is in Node
 * @example
 * isNode()
 */

const isNode = (): boolean =>
  process && !!process.version

export default isNode
