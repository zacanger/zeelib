/**
 * See if an object has a property
 * @example
 * has('a' { b: 'c' }) // => false
 */

const has = (p: string, o: Record<string, any>): boolean =>
  Object.prototype.hasOwnProperty.call(o, p)

export default has
