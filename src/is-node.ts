/**
 * Returns true if code is in Node
 * @example
 * isNode()
 */

export const isNode = (): boolean =>
  typeof process !== 'undefined' && !!process.version
