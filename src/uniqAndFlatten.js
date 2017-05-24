// @flow

import flatten from './flatten'
import uniq from './uniq'

/**
 * Uniqs arrays, then recursively flattens
 */

const uniqAndFlatten = (arr: any[]): any[] =>
  flatten(uniq(arr))

export default uniqAndFlatten
