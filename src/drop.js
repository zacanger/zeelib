// @flow

/**
 * Like Haskell's `drop`
 */

const drop = (n: number, a: any[]): any[] => {
  const alen = a.length
  if (n < 1) return a
  if (n > alen) return []
  const a1 = []
  for (let i = n; i < alen; i++) {
    a1.push(a[i])
  }
  return a1
}

export default drop
