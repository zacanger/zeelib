import { statSync } from 'node:fs'

/**
 * Returns true if the path is a directory
 * @example
 * isDirectory('.') // => true
 * isDirectory('./fake-path') // => false
 */

const isDirectory = (filePath: string): boolean => {
  try {
    return statSync(filePath).isDirectory()
  } catch {
    return false
  }
}

export default isDirectory
