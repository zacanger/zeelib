// @flow

/**
 * Returns true if the value is a buffer
 */

const isBuffer = (a: any): bool => {
  try {
    return Buffer.isBuffer(a)
  } catch (_) {
    return false
  }
}

export default isBuffer
