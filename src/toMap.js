// @flow

const toMap = (a: any[]): Object => {
  const m = {}
  a.forEach((e, i) => {
    e.index = i
    m[e.name] = e
  })
  return m
}

export default toMap
