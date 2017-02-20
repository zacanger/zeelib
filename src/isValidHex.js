import isHexBased from './isHexBased'
import trimSpaces from './trimSpaces'

const isValidHex = (color) => isHexBased(trimSpaces(color))

export default isValidHex
