import isArray from './isArray'

/**
 * Shallow, top-level copy an object
 * @param {Object} o
 * @returns {Object}
 */

const shallowCopy = (o) => {
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
