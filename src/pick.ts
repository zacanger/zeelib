/**
 * `pick`
 * as it is in rambda (not ramda)
 * @example
 * pick('a', { a: 'a', b: 'b' }) // => { a: 'a' }
 * pick([ 'a', 'b' ], { a: 'a', b: 'b', c: 'c' }) // => { a: 'a', b: 'b' }
 */

export const pick = (
  ks: string | string[],
  o: Record<string, any>,
): Record<string, any> => {
  const r: Record<string, any> = {}
  let c: number = 0
  while (c < ks.length) {
    if (ks[c] in o) {
      r[ks[c]] = o[ks[c]]
    }
    c++
  }

  return r
}
