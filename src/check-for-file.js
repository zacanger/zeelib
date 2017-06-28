// @flow

import { statSync } from 'fs'
import { resolve } from 'path'

/**
 * Returns bool based on if passed path exists
 * @example
 * checkForFile('./foo') // => bool
 */

const checkForFile = (filePath: string): bool => {
  try {
    statSync(resolve(filePath))
    return true
  } catch (_) {
    return false
  }
}

export default checkForFile
