// @flow

import isHexBased from './isHexBased'
import trimSpaces from './trimSpaces'

const isValidHex = (color: string): bool =>
  isHexBased(trimSpaces(color))

export default isValidHex
