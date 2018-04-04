// @flow

/**
 * Returns true if the value is a function
 * @example
 * const noop = () => {}
 * isFunction(2) // => false
 * isFunction(noop) // => true
 */

const isFunction = (v: mixed): bool =>
  typeof v === 'function'

export default isFunction
