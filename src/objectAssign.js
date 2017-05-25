// @flow

const objectAssign = Object.assign || function (target: Object, source: Object): Object {
  console.error('`objectAssign` is deprecated. Please use `Object.assign` instead.')
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] = source[key]
    }
  }
  return target
}

export default objectAssign
