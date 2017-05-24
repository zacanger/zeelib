// @flow

import flatten from './flatten'
import uniq from './uniq'

/**
 * Recursively flatten arrays
 * then uniq what's left
 */

const flattenAndUniq = (arr: any): any[] =>
  uniq(flatten(arr))

export default flattenAndUniq
