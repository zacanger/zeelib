// @flow

const toObject = (arr: any[]): Object => {
  console.error('`toObject` is deprecated. Please use `objectFromEntries`.')
  return arr.reduce((res, [ k, v ]) => ({ ...res, [k]: v }), {})
}

export default toObject
