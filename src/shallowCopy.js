import isArray from './isArray'

// top level
const shallowCopy = o => {
  let newObj
  if (!o || typeof o !== 'object') {
    return o
  }
  if (isArray(o)) {
    return o.slice(0)
  }
  newObj = {}
  Object.keys(o).forEach(prop => {
    newObj[prop] = o[prop]
  })
  return newObj
}

export default shallowCopy
