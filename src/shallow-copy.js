import isArray from './is-array'

const shallowCopy = (o) => {
  console.error('`shallowCopy` is deprecated. Please use `clone` instead.')
  let newObj
  if (!o || typeof o !== 'object') {
    return o
  }
  if (isArray(o)) {
    return o.slice(0)
  }
  newObj = {}
  Object.keys(o).forEach((prop) => {
    newObj[prop] = o[prop]
  })
  return newObj
}

export default shallowCopy
