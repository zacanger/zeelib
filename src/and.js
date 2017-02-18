const and = (a) => {
  for (let i in a) {
    if (a[i] === false) {
      return false
    }
  }
  return true
}

export default and
