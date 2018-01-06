// @flow

/**
 * Returns true if the value is of the type
 * @example
 * is('number', 2) // => true
 */

const is = (type: string, val: mixed): bool =>
  typeof val === type // eslint-disable-line valid-typeof

export default is
