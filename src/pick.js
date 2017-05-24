// @flow

/**
 * `pick`
 * as it is in rambda (not ramda), MIT gh:selfrefactor
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
