// @flow

import toBool from './to-bool'

/**
 * Get inverse truthiness
 */

const toBoolInverse = (val: any): bool =>
  !toBool(val)

export default toBoolInverse
