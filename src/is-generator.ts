/**
 * Returns true if passed val is a generator
 * @example
 * isGenerator(2) // => false
 */

const isGenerator = (v: any): boolean => {
  if (v && typeof v.next === 'function' && typeof v.throw === 'function') {
    return true
  }
  return false
}

export default isGenerator
