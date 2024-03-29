/**
 * Convert rgb to hex
 * @example
 * rgbToHex(255, 255, 255) // => '#ffffff'
 */

export const rgbToHex = (r: number, g: number, b: number): string =>
  '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
