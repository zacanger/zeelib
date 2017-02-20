// @flow

const concat = (a: any) : any[] => {
  let r = []
  for (let i in a) {
    r = r.concat(a[i])
  }
  return r
}

export default concat
