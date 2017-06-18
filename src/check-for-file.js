// @flow

/**
 * Returns bool based on if passed path exists
 * @example
 * checkForFile('./foo') // => bool
 */

import { statSync } from 'fs'
import { resolve } from 'path'

const checkForFile = (filePath: string): bool => {
  try {
    statSync(resolve(filePath))
    return true
  } catch (_) {
    return false
  }
}

export default checkForFile
