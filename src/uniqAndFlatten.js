// @flow

import flatten from './flatten'
import uniq from './uniq'

/**
 * Uniqs arrays, then recursively flattens
 */

const uniqAndFlatten = (a: any): any[] =>
  flatten(uniq(a))

export default uniqAndFlatten
