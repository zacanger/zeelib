// @flow

import toBool from './to-bool'

/**
 * Get inverse truthiness
 * @example
 * toBoolInverse(1) // => false
 */

const toBoolInverse = (val: mixed): bool =>
  !toBool(val)

export default toBoolInverse
