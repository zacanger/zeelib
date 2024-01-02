import { watch as w } from 'node:fs'
import { resolve } from 'node:path'

/**
 * Watch a file for changes, and call the function
 * @example
 * watch('./foo', console.log)
 */

export const watch = (
  filePath: string,
  cb: (event: string, filename: string | null) => void,
): void => {
  const file = resolve(filePath)
  try {
    w(file, cb)
  } catch (e) {
    if ((e as NodeJS.ErrnoException).code === 'ENOENT') {
      console.error('Error, no such file', file)
    } else {
      console.error(e)
    }
  }
}
