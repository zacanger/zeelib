import { parse } from 'path'

/**
 * Get the file extension for a given file
 * @example
 * getFileExt('foo.bar') // => '.bar'
 */

const getFileExt = (str: string): string =>
  parse(str).ext.replace(/./, '') || ''

export default getFileExt
