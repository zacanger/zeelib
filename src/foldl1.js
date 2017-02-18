const foldl1 = (f, a) => {
  let s = a[0]
  for (let i = 1; i < a.length; i++) {
    s = f(s, a[i])
  }
  return s
}

export default foldl1
