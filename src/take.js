const take = (n, a) => {
  const alen = a.length
  if (n > alen) return a
  const a1 = []
  for (let i = 0; i < n && i < alen; i++) {
    a1.push(a[i])
  }
  return a1
}

export default take
