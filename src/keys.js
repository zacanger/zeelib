// @flow

const keys = Object.keys || function (obj: Object): any[] {
  console.error('`keys` is deprecated. Please use `Object.keys` instead.')
  const r = []
  for (let i in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, i)) {
      r.push(i)
    }
  }
  return r
}

export default keys
