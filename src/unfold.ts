/**
 * Builds a list from a seed
 * Takes an iterating fn and an array seed
 */

const unfold = <T>(
  fn: (t: T) => T[],
  seed: T,
): T[] => {
  const r: T[] = fn(seed)
  if (!Array.isArray(r)) {
    return []
  }
  return [ r[0] ].concat(unfold(fn, r[1]))
}

export default unfold
