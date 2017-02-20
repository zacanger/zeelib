// @flow

const and = (a: Object) : bool => {
  for (let i in a) {
    if (a[i] === false) {
      return false
    }
  }
  return true
}

export default and
