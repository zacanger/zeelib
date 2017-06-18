// @flow

const isWin = (): bool =>
  process.platform === 'win32'

const isColor = (): bool => {
  const termColor = /^screen|^xterm|^vt100|color|ansi|cygwin|linux/i
  return !!process.env.COLORTERM || termColor.test(process.env.TERM || '')
}

/**
 * Returns true if the current terminal supports color
 * @example
 * hasColor()
 */

const hasColor: bool = isWin() || isColor()

export default hasColor
