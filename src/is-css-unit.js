// @flow

/**
 * Check if a value is a valid CSS unit
 * @example
 * isCssUnit('100px') // => true
 * isCssUnit('auto') // => true
 * isCssUnit(0) // => false
 * isCssUnit('90') // => false
 * isCssUnit(90) // => false
 */

const isCssUnit = (p: mixed): bool => {
  if (p === 0) return true
  if (typeof p !== 'string') return false
  if (p.match(/^(auto|0)$|^[+-]?[0-9]+\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc|ch|vh|vw|vmin|vmax)$/) || p === undefined) {
    return true
  }
  return false
}

export default isCssUnit
