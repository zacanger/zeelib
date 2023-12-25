import { statSync } from 'node:fs'
import { resolve } from 'node:path'

/**
 * Returns bool based on if passed path exists
 * @example
 * fileExists('./foo') // => boolean
 */

const fileExists = (filePath: string): boolean => {
  try {
    statSync(resolve(filePath))
    return true
  } catch {
    return false
  }
}

export default fileExists
