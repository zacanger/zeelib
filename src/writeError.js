// @flow

import { createWriteStream } from 'fs'
import { format } from 'util'

/**
 * Use instead of `console.error()`
 * Logs to file and stdout both
 */

const fn = process.argv[2] || process.env.ERR_FILE || 'err.log'
const file = createWriteStream(`${__dirname}/${fn}`, { flags : 'w' })
const writeError = (d: any): void => {
  file.write(format(d) + '\n')
  process.stdout.write(format(d) + '\n')
}

export default writeError
