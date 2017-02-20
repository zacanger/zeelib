// @flow

const or = (a: Object) : bool => {
  for (let i in a) {
    if (a[i] === true) {
      return true
    }
  }
  return false
}

export default or
