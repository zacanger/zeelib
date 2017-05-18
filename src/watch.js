// @flow

import { watch } from 'fs'
import { resolve } from 'path'

/**
 * Watch a file for changes, and call the function
 */

const watchFile = (f: string, cb: () => any): void => {
  const file = resolve(f)
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
