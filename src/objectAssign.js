// copy vals of all enumerable own properties from source obj to target obj
const objectAssign = Object.assign || function (target, source) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] = source[key]
    }
  }
  return target
}

export default objectAssign
