// @flow

import { watch } from 'fs'
import { resolve } from 'path'

const watchFile = (f: string, cb: Function): void => {
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
