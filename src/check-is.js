// @flow

import is from './is'

type R = Error | any

/**
 * Takes a string of a type (eg 'function'),
 * any value, and an optional name for that value.
 * Throws an error if the value is not of the passed type;
 * returns the value otherwise.
 * @example
 * checkIs('function', () => {}) // => [Function]
 * checkIs('function', 2) // => Error
 */

const checkIs = (type: string, val: any, name: ?string): R => {
  if (!is(type, val)) {
    throw new TypeError(`${name || val.name || val.toString() || ''} should be of type ${type}!`)
  }
  return val
}

export default checkIs
