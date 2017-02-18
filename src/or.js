const or = (a) => {
  for (var i in a) {
    if (a[i] === true) {
      return true
    }
  }
  return false
}

export default or
