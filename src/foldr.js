// @flow

const foldr = (f: any, s: any, a: any[]): any => {
  for (let i = a.length - 1; i >= 0; i--) {
    s = f(s, a[i])
  }
  return s
}

export default foldr
