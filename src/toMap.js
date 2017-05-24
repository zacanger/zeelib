// @flow

/**
 * Make a map-like object from an array
 */

const toMap = (arr: any[]): Object => {
  const m = {}
  arr.forEach((e, i) => {
    e.index = i
    m[e.name] = e
  })
  return m
}

export default toMap
