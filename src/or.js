const or = (a) => {
  for (let i in a) {
    if (a[i] === true) {
      return true
    }
  }
  return false
}

export default or
