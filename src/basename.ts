import { parse } from 'node:path'

/**
 * `basename` for Node
 * @example
 * basename() // => string
 */

export const basename = (str: string = ''): string =>
  parse(str).base
