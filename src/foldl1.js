// @flow

const foldl1 = (f: any, a: any[]): any => {
  let s = a[0]
  for (let i = 1; i < a.length; i++) {
    s = f(s, a[i])
  }
  return s
}

export default foldl1
