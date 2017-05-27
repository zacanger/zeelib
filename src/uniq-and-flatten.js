// @flow

import flatten from './flatten'
import uniq from './uniq'

const uniqAndFlatten = (arr: any[]): any[] => {
  console.error('`uniqAndFlatten` is deprecated.')
  return flatten(uniq(arr))
}

export default uniqAndFlatten
