/**
 * See if an object has a property
 * @example
 * has('a' { b: 'c' }) // => false
 */

export const has = (p: string, o: Record<string, any>): boolean =>
  Object.prototype.hasOwnProperty.call(o, p)
