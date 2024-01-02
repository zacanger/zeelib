import { stat, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

/**
 * Make a file if it doesn't exist already
 * @example
 * touch('foo.txt')
 * touch('foo.txt', 'contentx')
 */

export const touch = async (
  filePath: string,
  contents: string = '',
): Promise<void> => {
  const fl = resolve(filePath)
  try {
    await stat(fl)
  } catch {
    await writeFile(fl, contents)
  }
}
