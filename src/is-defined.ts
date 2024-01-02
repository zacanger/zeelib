/**
 * Returns true if the value is defined
 * @example
 * isDefined(null) // => true
 */

export const isDefined = (v: any): boolean =>
  typeof v !== 'undefined'
