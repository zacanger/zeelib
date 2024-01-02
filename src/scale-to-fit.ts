/**
 * Takes a width, height, maxWidth, and maxHeight
 *
 * Returns an object that tells you the largest you can
 * scale to
 * @example
 * scaleToFit(1400, 1200, 2000, 200) // => { width: 233.33333333333331, height: 200 }
 */

export const scaleToFit = (
  width: number,
  height: number,
  maxWidth?: number,
  maxHeight?: number,
): { width: number, height: number } => {
  const output = { width, height }

  if (maxWidth && output.width > maxWidth) {
    output.width = maxWidth
    output.height = (maxWidth / width) * height
  }
  if (maxHeight && output.height > maxHeight) {
    output.height = maxHeight
    output.width = (maxHeight / height) * width
  }

  return output
}
