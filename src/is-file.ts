import { stat } from 'node:fs/promises'
import { resolve } from 'node:path'

/**
 * Returns true if the path is a file
 * @example
 * isFile('./README.md') // => true
 * isFile('.') // => false
 */

export const isFile = async (filePath: string): Promise<boolean> => {
  try {
    const f = await stat(resolve(filePath))
    return f.isFile()
  } catch {
    return false
  }
}
