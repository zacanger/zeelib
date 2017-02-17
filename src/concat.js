const concat = (a) => {
  let r = []
  for (let i in a) {
    r = r.concat(a[i])
  }
  return r
}

export default concat
