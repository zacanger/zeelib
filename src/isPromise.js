// @flow

const isPromise = (a: any): bool =>
  a && typeof a.then === 'function'

export default isPromise
