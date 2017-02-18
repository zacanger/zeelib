const foldr1 = (f, a) => {
  let s = a[a.length - 1]
  for (let i = a.length - 2; i >= 0; i--) {
    s = f(s, a[i])
  }
  return s
}

export default foldr1
