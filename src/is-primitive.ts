/**
 * Returns true if value is a primitive
 * @example
 * isPrimitive(1) // => true
 */

const isPrimitive = (v: any): boolean => {
  if (v === null) return true
  const t = typeof v
  return t !== 'object' && t !== 'function'
}

export default isPrimitive
