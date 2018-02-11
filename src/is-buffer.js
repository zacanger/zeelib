// @flow

/**
 * Returns true if the value is a buffer
 * @example
 * isBuffer('asdf') // => false
 * isBuffer(Buffer.from('asdf')) // => true
 */

const isBuffer = (a: mixed): bool => {
  try {
    return Buffer.isBuffer(a)
  } catch (_) {
    return false
  }
}

export default isBuffer
