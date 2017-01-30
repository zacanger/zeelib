import isArrayLike from './isArrayLike'

const isNodeList = v =>
  isArrayLike(v) && /^\[object (HTMLCollection|NodeList)\]$/.test(v + '')

export default isNodeList
