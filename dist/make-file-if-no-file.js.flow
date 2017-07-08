// @flow

import { statSync, writeFileSync } from 'fs'
import { resolve } from 'path'

/**
 * Make a file if it doesn't exist already
 * @example
 * makeFileIfNoFile('foo.txt')
 * makeFileIfNoFile('foo.txt', 'contentx')
 */

const makeFileIfNoFile = (
  filePath: string,
  contents: string = ''
): void => {
  const fl = resolve(filePath)
  try {
    statSync(fl)
  } catch (_) {
    writeFileSync(fl, contents)
  }
}

export default makeFileIfNoFile
