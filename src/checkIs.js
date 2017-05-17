// @flow

import is from './is'

type R = Error | any

/**
 * Takes a string of a type (eg 'function'),
 * any value, and an optional name for that value.
 * Throws an error if the value is not of the passed type;
 * returns the value otherwise.
 */

const checkIs = (t: string, v: any, n: ?string): R => {
  if (!is(t, v)) {
    throw new TypeError(`${n || v.name || ''} should be of type ${t}!`)
  }
  return v
}

export default checkIs
