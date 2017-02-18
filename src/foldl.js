const foldl = (f, s, a) => {
  for (let i in a) {
    s = f(s, a[i])
  }
  return s
}

export default foldl
