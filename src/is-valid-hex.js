// @flow

import isHexBased from './is-hex-based'
import trimSpaces from './trim-spaces'

/**
 * Returns true if string is a valid hex
 */

const isValidHex = (color: string): bool =>
  isHexBased(trimSpaces(color))

export default isValidHex
