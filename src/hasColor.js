// flow

// check if a terminal supports color
const isWin = (): bool =>
  process.platform === 'win32'

const isColor = (): bool => {
  const termColor = /^screen|^xterm|^vt100|color|ansi|cygwin|linux/i
  return !!process.env.COLORTERM || termColor.test(process.env.TERM)
}

const hasColor = isWin() || isColor()

export default hasColor
