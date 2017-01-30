import trimSpaces from './trimSpaces'
import isHexBased from './isHexBased'
import trimHash from './trimHash'

// takes string color, returns either string or null
const normalizeColor = color => {
  let nextColor = trimSpaces(color)
  if (!isHexBased(color)) {
    return null
  }
  nextColor = trimHash(nextColor)
  if (nextColor.length === 3) {
    nextColor = nextColor.replace(/./g, d => d + d)
  }
  return nextColor.toUpperCase()
}

export default normalizeColor
