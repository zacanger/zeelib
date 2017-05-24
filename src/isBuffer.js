// @flow

/**
 * Returns true if the value is a buffer
 */

const isBuffer = (a: any): bool =>
  Buffer.isBuffer(a)

export default isBuffer
