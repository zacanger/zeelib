import deepCopy from './deep-copy'
import shallowCopy from './shallow-copy'

const copy = (o, shallow) => {
  console.error('`copy` is deprecated. Please use `clone` instead.')
  let copyfn = shallow ? shallowCopy : deepCopy
  return copyfn(o)
}

export default copy
