// @flow

import is from './is'

type R = Error | any

/**
 * Takes a string of a type (eg 'function'),
 * any value, and an optional name for that value.
 * Throws an error if the value is not of the passed type;
 * returns the value otherwise.
 */

const checkIs = (type: string, val: any, name: ?string): R => {
  if (!is(type, val)) {
    throw new TypeError(`${name || val.name || ''} should be of type ${type}!`)
  }
  return val
}

export default checkIs
