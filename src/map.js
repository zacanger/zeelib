// @flow

/*
 * `map`
 */

const map = (fn: () => any, arr: ?any[]): any => {
  if (arr === undefined) {
    return (h) => map(fn, h)
  }

  let ix = -1
  const len = (arr && arr.length) || 0
  const toReturn = Array(len)

  while (++ix < len) {
    if (arr) {
      toReturn[ix] = fn(arr[ix])
    }
  }

  return toReturn
}

export default map
