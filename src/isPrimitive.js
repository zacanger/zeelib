// @flow

/**
 * Returns true if value is a primitive
 */

const isPrimitive = (v: any): bool => {
  if (v === null) {
    return true
  }
  const t = typeof v
  return t !== 'object' && t !== 'function'
}

export default isPrimitive
