// @flow

import { statSync } from 'fs'

/**
 * Returns true if the path is a directory
 * @example
 * isDirectory('.') // => true
 * isDirectory('./fake-path') // => false
 */

const isDirectory = (filePath: string): bool => {
  try {
    return statSync(filePath).isDirectory()
  } catch (_) {
    return false
  }
}

export default isDirectory
