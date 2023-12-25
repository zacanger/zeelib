type AnyFn = <T>(...args: T[]) => T

/**
 * Only calls fn once; subsequent calls just return first val
 * @example
 * const o = once(id)
 * o(1) // => 1
 * o() // => 1
 * o(2) // => 1
 */

const once = <U>(fn: AnyFn): (...args: U[]) => U => {
  let returnValue: U
  return (...args: U[]): U => {
    if (!returnValue) {
      returnValue = fn(...args)
    }
    return returnValue
  }
}

export default once
