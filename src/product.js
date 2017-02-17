const product = (a) => {
  let s = 1
  for (let i in a) {
    s *= a[i]
  }
  return s
}

export default product
