import { lstat } from 'node:fs/promises'
import { resolve } from 'node:path'

/**
 * Returns true if path is a symlink
 * @example
 * isSymLink('.') // => false
 */

export const isSymLink = async (filePath: string): Promise<boolean> => {
  try {
    const l = await lstat(resolve(filePath))
    return l.isSymbolicLink()
  } catch {
    return false
  }
}
