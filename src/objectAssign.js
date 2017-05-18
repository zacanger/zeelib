// @flow

/**
 * `Object.assign`
 * Copy vals of all enumerable own properties from source obj to target obj
 */

const objectAssign = Object.assign || function (target: Object, source: Object): Object {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] = source[key]
    }
  }
  return target
}

export default objectAssign
