// @flow

type O = {
  width: number,
  height: number
}

const scaleToFit = (
  width: number,
  height: number,
  maxWidth: ?number,
  maxHeight: ?number
) : O => {
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
