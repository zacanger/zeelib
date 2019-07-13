import { parse } from 'path'

/**
 * `basename` for Node
 * @example
 * basename() // => string
 */

const getBasename = (str: string = ''): string => parse(str).base

export default getBasename
