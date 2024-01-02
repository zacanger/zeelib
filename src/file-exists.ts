import { stat } from 'node:fs/promises'
import { resolve } from 'node:path'

/**
 * Returns bool based on if passed path exists
 * @example
 * await fileExists('./foo') // => Promise<true>
 */

export const fileExists = async (filePath: string): Promise<boolean> => {
  try {
    await stat(resolve(filePath))
    return true
  } catch {
    return false
  }
}
