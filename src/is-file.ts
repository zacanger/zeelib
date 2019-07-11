import { statSync } from 'fs'

/**
 * Returns true if the path is a file
 * @example
 * isFile('./README.md') // => true
 * isFile('.') // => false
 */

const isFile = (filePath: string): boolean => {
  try {
    return statSync(filePath).isFile()
  } catch (_) {
    return false
  }
}

export default isFile
