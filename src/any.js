const any = (f, a) => {
  for (let i in a) {
    if (f(a[i]) === true) {
      return true
    }
  }
  return false
}

export default any
