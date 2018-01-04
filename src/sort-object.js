// @flow

import isObject from './is-object'
import objectFromEntries from './object-from-entries'

/**
 * Sort an object (recursively)
 * @example
 * sortObject({ b: 'c', a: 'd' }) // => { a: 'd', b: 'c' }
 */

const sortObject = <O: {+[string]: mixed}>(o: O): O => {
  if (!isObject(o)) throw new Error('Expected an object')
  // eslint-disable-next-line flowtype/no-weak-types
  const ks = Object.keys(o)
  ks.sort()
  const vals = []
  for (let i: number = 0; i < ks.length; i++) {
    const k = ks[i]
    const v = o[k]
    // eslint-disable-next-line flowtype/no-weak-types
    vals.push([ k, isObject(v) ? sortObject((v: any)) : v ])
  }
  return objectFromEntries(vals)
}

export default sortObject
