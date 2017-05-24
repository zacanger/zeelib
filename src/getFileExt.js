// @flow

import { parse } from 'path'

/**
 * Get the file extension for a given file
 */

const getFileExt = (s: string): string =>
  parse(s).ext || ''

export default getFileExt
