// @flow

import isArray from './isArray'

const deepCopy = (o: Object) : any => {
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
