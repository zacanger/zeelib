// @flow

/**
 * Get list of methods in an object
 * @example
 * const o = { foo: () => true, bar () { return false }, a: 'b' }
 * getMethodsOf(o) // => [ 'foo', 'bar' ]
 */

const getMethodsOf = (o: Object): string[] => {
  const r = []
  for (let m in o) {
    if (o.hasOwnProperty(m)) {
      if (typeof o[m] === 'function') {
        r.push(o[m].name)
      }
    }
  }
  return r
}

export default getMethodsOf
