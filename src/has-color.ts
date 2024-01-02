const isWin = (): boolean => process.platform === 'win32'

const isColor = (): boolean => {
  const termColor = /^screen|^xterm|^vt100|color|ansi|cygwin|linux/i
  return !!process.env.COLORTERM ?? termColor.test(process.env.TERM ?? '')
}

/**
 * Returns true if the current terminal supports color
 * @example
 * hasColor()
 */

export const hasColor = (): boolean => isWin() ?? isColor()
