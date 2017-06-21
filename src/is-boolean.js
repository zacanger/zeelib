// @flow

/**
 * Returns true if the value is a boolean
 * @example
 * isBoolean(true) // => true
 */

const isBoolean = (v: any): bool =>
  typeof v === 'boolean'

export default isBoolean
