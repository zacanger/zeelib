// @flow

import trimSpaces from './trim-spaces'
import isHexBased from './is-hex-based'
import trimHash from './trim-hash'

/**
 * takes string color, returns either string or null
 */

const normalizeColor = (color: string): string | null => {
  let nextColor = trimSpaces(color)
  if (!isHexBased(color)) {
    return null
  }
  nextColor = trimHash(nextColor)
  if (nextColor.length === 3) {
    nextColor = nextColor.replace(/./g, (d) => d + d)
  }
  return nextColor.toUpperCase()
}

export default normalizeColor
