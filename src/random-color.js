// @flow

/**
 * Get a random hex-based color
 */

const randomColor = (): string => {
  const hex = Math.floor(Math.random() * 16777215).toString(16)
  const pad = '000000'
  return '#' + (pad + hex).slice(-pad.length)
}
export default randomColor
