// @flow

type O = {
  width: number,
  height: number
}

/**
 * Takes a width, height, maxWidth, and maxHeight
 * Returns an object that tells you the largest you can
 * scale to.
 */

const scaleToFit = (
  width: number,
  height: number,
  maxWidth: ?number,
  maxHeight: ?number
): O => {
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

export default scaleToFit
