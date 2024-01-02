import { reduce } from './reduce'

type AnyFn = (...args: any[]) => any

/**
 * Left to right composition
 * @example
 * const addOne = (a) => a + 1
 * const timesTwo = (a) => a * 2
 * pipe(addOne, timesTwo)(2) // => 6
 */

export const pipe = <T>(...fns: AnyFn[]) =>
  (data: T) =>
    reduce((v: T, fn: AnyFn) => fn(v), data, fns)
