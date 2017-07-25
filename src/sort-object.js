// @flow

import isObject from './is-object'
import objectFromEntries from './object-from-entries'

/**
 * Sort an object
 * @example
 * sortObject({ b: 'c', a: 'd' }) // => { a: 'd', b: 'c' }
 */

const sortObject = (o: Object): Object => {
  if (!isObject(o)) return o
  const ks = Object.keys(o)
  ks.sort()
  const vals = []
  for (let i = 0; i < ks.length; i++) {
    const k = ks[i]
    vals.push([ k, sortObject(o[k]) ])
  }
  return objectFromEntries(vals)
}

export default sortObject
