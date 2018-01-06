// @flow

/**
 * Returns true if value is a promise
 * @example
 * isPromise(Promise.resolve())
 */

const isPromise = (a: mixed): bool => {
  if (a && typeof a.then === 'function') return true
  return false
}

export default isPromise
