const concatMap = (f, a) => {
  let r = []
  for (let i in a) {
    r = r.concat(f(a[i]))
  }
  return r
}

export default concatMap
