const dropWhile = (pd, a) => {
  for (let i in a) {
    if (!pd(a[i])) return a.slice(i)
  }
  return []
}

export default dropWhile
