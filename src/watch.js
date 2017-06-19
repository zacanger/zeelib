// @flow

import { watch } from 'fs'
import { resolve } from 'path'

/**
 * Watch a file for changes, and call the function
 * @example
 * watch('./foo', console.log)
 */

const watchFile = (
  filePath: string,
  cb: () => any
): void => {
  const file = resolve(filePath)
  try {
    watch(file, cb)
    console.log('watching', file)
  } catch (e) {
    if (e.errno === 'ENOENT') {
      console.error('Error, no such file', file)
    } else {
      console.error(e)
    }
  }
}

export default watchFile
