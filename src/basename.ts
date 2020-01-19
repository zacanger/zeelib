import { parse } from 'path'

/**
 * `basename` for Node
 * @example
 * basename() // => string
 */

const basename = (str: string = ''): string => parse(str).base

export default basename
