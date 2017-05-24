// @flow

import isHexBased from './isHexBased'
import trimSpaces from './trimSpaces'

/**
 * Returns true if string is a valid hex
 */

const isValidHex = (color: string): bool =>
  isHexBased(trimSpaces(color))

export default isValidHex
