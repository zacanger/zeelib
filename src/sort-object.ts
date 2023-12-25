import isObject from './is-object'

/**
 * Sort an object (recursively)
 * @example
 * sortObject({ b: 'c', a: 'd' }) // => { a: 'd', b: 'c' }
 */

type AnyMap = Record<string, any>

const sortObject = (o: AnyMap): AnyMap => {
  if (!isObject(o)) throw new Error('Expected an object')
  const ks = Object.keys(o)
  ks.sort()
  const vals = []
  for (let i: number = 0; i < ks.length; i++) {
    const k = ks[i]
    const v = o[k]
    vals.push([ k, isObject(v) ? sortObject(v as AnyMap) : v ])
  }
  return Object.fromEntries(vals)
}

export default sortObject
