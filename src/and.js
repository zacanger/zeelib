// @flow

const and = (a: any) : bool => {
  for (let i in a) {
    if (a[i] === false) {
      return false
    }
  }
  return true
}

export default and
