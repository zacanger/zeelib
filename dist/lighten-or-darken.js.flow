// @flow

/**
 * Lighten or darken a color
 * @example
 * // lighten
 * const newCol = lightenOrDarken('#F06D06', 20)
 * // darken
 * const newCol = lightenOrDarken('#F06D06', -20)
 */

const lightenOrDarken = (col: string, amt: number): string => {
  let useHash = false
  let num = parseInt(col, 16)
  let r = (num >> 16) + amt
  let b = ((num >> 8) & 0x00FF) + amt
  let g = (num & 0x0000FF) + amt

  if (col[0] === '#') {
    col = col.slice(1)
    useHash = true
  }
  if (r > 255) {
    r = 255
  } else if (r < 0) {
    r = 0
  }
  if (b > 255) {
    b = 255
  } else if (b < 0) {
    b = 0
  }
  if (g > 255) {
    g = 255
  } else if (g < 0) {
    g = 0
  }
  return (useHash ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}

export default lightenOrDarken
