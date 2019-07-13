import { statSync } from 'fs'
import { resolve } from 'path'

/**
 * Returns bool based on if passed path exists
 * @example
 * fileExists('./foo') // => bool
 */

const fileExists = (filePath: string): boolean => {
  try {
    statSync(resolve(filePath))
    return true
  } catch (_) {
    return false
  }
}

export default fileExists
