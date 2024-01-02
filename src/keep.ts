import { filter } from './filter'

type R = string | any[] | Record<string, any>

/**
 * Returns an array or object with all falsey values removed
 * @example
 * keep([ 'a', null, '', 2]) // => [ 'a', 2 ]
 * keep({ a: '', b: null, c: 2 }) // => { c: 2 }
 */

export const keep = (x: R): R =>
  filter((y) => !!y, x)
