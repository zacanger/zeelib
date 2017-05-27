// @flow

import { statSync } from 'fs'

/**
 * Returns true if the path is a file
 */

const isFile = (filePath: string): bool => {
  try {
    return statSync(filePath).isFile()
  } catch (_) {
    return false
  }
}

export default isFile
