const foldr = (f, s, a) => {
  for (let i = a.length - 1; i >= 0; i--) {
    s = f(s, a[i])
  }
  return s
}

export default foldr
