import { statSync, writeFileSync } from 'fs'
import { resolve } from 'path'

/**
 * Make a file if it doesn't exist already
 * @param {string} filePath
 * @param {string} contents (optional)
 */

const makeFileIfNoFile = (filePath, contents = '') => {
  const fl = resolve(filePath)
  try {
    statSync(fl)
  } catch (_) {
    writeFileSync(fl, contents)
  }
}

export default makeFileIfNoFile
