// @flow

import { lstatSync } from 'fs'

/**
 * Returns true if path is a symlink
 * @example
 * isSymLink('.') // => false
 */

const isSymLink = (filePath: string): bool => {
  try {
    return lstatSync(filePath).isSymbolicLink()
  } catch (_) {
    return false
  }
}

export default isSymLink
