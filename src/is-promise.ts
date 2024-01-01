/**
 * Returns true if value is a promise
 * @example
 * isPromise(Promise.resolve())
 */

const isPromise = (a: any): boolean => {
  if (a && typeof a.then === 'function') return true
  return false
}

export default isPromise
