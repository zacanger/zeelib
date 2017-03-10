// @flow

const any = (f: any, a: Object): bool => {
  for (let i in a) {
    if (f(a[i]) === true) {
      return true
    }
  }
  return false
}

export default any
