// @flow

import deepCopy from './deepCopy'
import shallowCopy from './shallowCopy'

// copy obj, either shallow or deep
const copy = (o: any, shallow: bool) : any => {
  let copyfn = shallow ? shallowCopy : deepCopy
  return copyfn(o)
}

export default copy
