// @flow

import is from './is'

type R = Error | any

const checkIs = (t: string, v: any, n: ?string): R => {
  if (!is(t, v)) {
    throw new TypeError(`${n || v.name || ''} should be of type ${t}!`)
  }
  return v
}

export default checkIs
