import { lstatSync } from 'node:fs'

/**
 * Returns true if path is a symlink
 * @example
 * isSymLink('.') // => false
 */

const isSymLink = (filePath: string): boolean => {
  try {
    return lstatSync(filePath).isSymbolicLink()
  } catch {
    return false
  }
}

export default isSymLink
