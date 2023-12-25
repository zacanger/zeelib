import { watch } from 'node:fs'
import { resolve } from 'node:path'

/**
 * Watch a file for changes, and call the function
 * @example
 * watch('./foo', console.log)
 */

const watchFile = (
  filePath: string,
  cb: (event: string, filename: string | null) => void,
): void => {
  const file = resolve(filePath)
  try {
    watch(file, cb)
    console.log('watching', file)
  } catch (e) {
    if ((e as NodeJS.ErrnoException).code === 'ENOENT') {
      console.error('Error, no such file', file)
    } else {
      console.error(e)
    }
  }
}

export default watchFile
