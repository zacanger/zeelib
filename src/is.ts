/**
 * Returns true if the value is of the type
 * @example
 * is('number', 2) // => true
 */

export const is = (t: string, val: any): boolean =>
  // eslint-disable-next-line valid-typeof
  typeof val === t
