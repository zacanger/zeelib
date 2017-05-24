// @flow

import flatten from './flatten'
import uniq from './uniq'

/**
 * Recursively flatten arrays
 * then uniq what's left
 */

const flattenAndUniq = (a: any): any[] =>
  uniq(flatten(a))

export default flattenAndUniq
