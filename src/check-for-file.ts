import { statSync } from 'node:fs'
import { resolve } from 'node:path'

/**
 * Returns bool based on if passed path exists
 * @example
 * checkForFile('./foo') // => boolean
 */

const checkForFile = (filePath: string): boolean => {
  try {
    statSync(resolve(filePath))
    return true
  } catch (_) {
    return false
  }
}

export default checkForFile
