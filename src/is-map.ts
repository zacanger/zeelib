import { objectToString } from './object-to-string'

/**
 * Returns true if value is a map
 * @example
 * isMap(new Map()) // => true
 */

export const isMap = (v: any): boolean =>
  objectToString(v) === '[object Map]'
