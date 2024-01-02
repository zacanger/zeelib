import { objectToString } from './object-to-string'

/**
 * Returns true if value is an error
 * @example
 * isError(new Error()) // => true
 */

export const isError = (a: any): boolean =>
  a instanceof Error || objectToString(a) === '[object Error]'
