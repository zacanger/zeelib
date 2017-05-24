// @flow

import getHexRegex from './getHexRegex'

/**
 * Returns true if the string is hex-based
 */

const isHexBased = (color: string): bool =>
  getHexRegex().test(color)

export default isHexBased
