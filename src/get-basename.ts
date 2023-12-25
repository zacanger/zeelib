import { parse } from 'node:path'

/**
 * `basename` for Node
 * @example
 * getBasename() // => string
 */

const getBasename = (str: string = ''): string =>
  parse(str).base

export default getBasename
