// @flow

const concatMap = (f: any, a: any) : any[] => {
  let r = []
  for (let i in a) {
    r = r.concat(f(a[i]))
  }
  return r
}

export default concatMap
