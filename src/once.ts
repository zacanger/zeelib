/**
 * Only calls fn once; subsequent calls just return first val
 * @example
 * const o = once(id)
 * o(1) // => 1
 * o() // => 1
 * o(2) // => 1
 */

export const once = <U>(fn: (<T>(...args: T[]) => T)): (...args: U[]) => U => {
  let returnValue: U
  return (...args: U[]): U => {
    if (!returnValue) {
      returnValue = fn(...args)
    }
    return returnValue
  }
}
