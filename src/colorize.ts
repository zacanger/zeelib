import { inspect } from 'node:util'
import hasColor from './has-color'

type ColMap = Record<string, (t: string) => string>

const useColor = typeof process !== 'undefined' &&
  process.stdout.isTTY &&
  hasColor()

const cols = (color: string, text: string): string => {
  const codes = inspect.colors[color]
  return `\x1b[${codes?.[0]}m${text}\x1b[${codes?.[1]}m`
}

/**
 * Basic set of fns to add colors to console output in Node.
 *
 * Options:
 *
 * bold, italic, underline, inverse,
 * white, grey, black, blue, cyan, green, magenta, red, yellow
 * @example
 * console.log(colorize.bold(colorize.blue('foo'))) // => '\'\\u001b[34mfoo\\u001b[39m\''
 */

const colorize = (): ColMap => {
  const val: ColMap = {}
  Object.keys(inspect.colors).forEach((color: string): void => {
    val[color] = (text) => useColor ? cols(color, text) : text
  })
  return val
}

export default colorize()
