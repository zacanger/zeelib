// @flow

/**
 * Returns true if value is a promise
 * @example
 * isPromise(Promise.resolve())
 */

const isPromise = (a: any): bool =>
  a && typeof a.then === 'function'

export default isPromise
