// @flow

import flatten from './flatten'
import uniq from './uniq'

/**
 * Recursively flatten arrays
 * then uniq what's left
 * @example
 * flattenAndUniq([ 1, 2, 3, [ 1, 2, 3 ]]) // =>  [ 1, 2, 3 ]
 */

const flattenAndUniq = (arr: any): any[] =>
  uniq(flatten(arr))

export default flattenAndUniq
