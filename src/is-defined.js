// @flow

/**
 * Returns true if the value is defined
 * @example
 * isDefined(null) // => true
 */

const isDefined = (v: *): bool =>
  typeof v !== 'undefined'

export default isDefined
