// @flow

const toObject = (a: any[]): Object =>
  a.reduce((res, [k, v]) => ({ ...res, [k]: v }), {})

export default toObject
