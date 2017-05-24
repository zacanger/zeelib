// @flow

import deepCopy from './deepCopy'
import shallowCopy from './shallowCopy'

/**
 * Copy an object.
 * A truthy second param will make it a shallow copy.
 */

const copy = (o: Object, shallow: bool): Object => {
  let copyfn = shallow ? shallowCopy : deepCopy
  return copyfn(o)
}

export default copy
