const unfold = (fn, seed) => {
  const r = fn(seed)
  if (!Array.isArray(r)) {
    return []
  }
  return [r[0]].concat(unfold(fn, r[1]))
}

export default unfold
