// @flow

import toBool from './toBool'

/**
 * Get inverse truthiness
 */

const toBoolInverse = (val: any): bool =>
  !toBool(val)

export default toBoolInverse
