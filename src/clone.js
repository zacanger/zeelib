// @flow

const clone = (a: Object): Object =>
  JSON.parse(JSON.stringify(a))

export default clone
