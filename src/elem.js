const elem = (el, a) => {
  for (let i in a) {
    if (el === a[i]) {
      return true
    }
  }
  return false
}

export default elem
