// @flow

/**
 * `pick`
 * as it is in rambda (not ramda)
 * @example
 * pick('a', { a: 'a', b: 'b' }) // => { a: 'a' }
 * pick([ 'a', 'b' ], { a: 'a', b: 'b', c: 'c' }) // => { a: 'a', b: 'b' }
 */

function pick (ks: any, o: Object): Object {
  if (o === undefined) {
    return (t) => pick(ks, t)
  }

  const r = {}
  let c = 0
  while (c < ks.length) {
    if (ks[c] in o) {
      r[ks[c]] = o[ks[c]]
    }
    c++
  }

  return r
}

export default pick
