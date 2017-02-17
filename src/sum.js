const sum = (a) => {
  let s = 0
  for (let i in a) {
    s += a[i]
  }
  return s
}

export default sum
