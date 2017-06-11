import isArray from './is-array'

const deepCopy = (o) => {
  console.error('`deepCopy` is deprecated. Please use `clone` instead.')
  let newObj
  if (!o || typeof o !== 'object') {
    return o
  }
  if (isArray(o)) {
    return o.map((it) => deepCopy(it))
  }
  newObj = {}
  Object.keys(o).forEach((prop) => {
    newObj[prop] = deepCopy(o[prop])
  })
  return newObj
}

export default deepCopy
