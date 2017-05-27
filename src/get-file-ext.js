// @flow

import { parse } from 'path'

/**
 * Get the file extension for a given file
 */

const getFileExt = (str: string): string =>
  parse(str).ext || ''

export default getFileExt
