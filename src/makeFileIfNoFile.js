import { statSync, writeFileSync } from 'fs'
import { resolve } from 'path'

const makeFileIfNoFile = (f, c = '') => {
  const fl = resolve(f)
  try {
    statSync(fl)
  } catch (_) {
    writeFileSync(fl, c)
  }
}

export default makeFileIfNoFile
