import { stat } from 'node:fs/promises'
import { resolve } from 'node:path'

/**
 * Returns true if the path is a directory
 * @example
 * await isDirectory('.') // => true
 * await isDirectory('./fake-path') // => false
 */

export const isDirectory = async (filePath: string): Promise<boolean> => {
  try {
    const s = await stat(resolve(filePath))
    return s.isDirectory()
  } catch {
    return false
  }
}
