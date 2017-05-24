// @flow

import toBool from './toBool'

/**
 * Get inverse truthiness
 */

const toBoolInverse = (a: any): bool =>
  !toBool(a)

export default toBoolInverse
