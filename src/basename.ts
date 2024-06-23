import { parse } from 'node:path'

/**
 * `basename` for Node
 * @example
 * basename() // => string
 */

/** @deprecated will be removed in v13 */
export const basename = (str: string = ''): string =>
  parse(str).base
