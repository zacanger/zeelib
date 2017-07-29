// @flow

import { inspect } from 'util'

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

const colorize = (color: string, text: string): string => {
  const codes = inspect.colors[color]
  return `\x1b[${codes[0]}m${text}\x1b[${codes[1]}m`
}

const colors = (): any => {
  const val = {}
  Object.keys(inspect.colors).forEach((color) => {
    val[color] = (text: string) => colorize(color, text)
  })
  return val
}

export default colors()
