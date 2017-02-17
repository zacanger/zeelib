const takeWhile = (pred, a) => {
  const a1 = []
  for (let i in a) {
    const c = a[i]
    if (pred(c)) {
      a1.push(c)
    } else {
      return a1
    }
  }
  return a1
}

export default takeWhile
