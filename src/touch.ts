import { statSync, writeFileSync } from 'fs'
import { resolve } from 'path'

/**
 * Make a file if it doesn't exist already
 * @example
 * touch('foo.txt')
 * touch('foo.txt', 'contentx')
 */

const touch = (filePath: string, contents: string = ''): void => {
  const fl = resolve(filePath)
  try {
    statSync(fl)
  } catch {
    writeFileSync(fl, contents)
  }
}

export default touch
