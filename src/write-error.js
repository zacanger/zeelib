// @flow

import { createWriteStream } from 'fs'
import { format } from 'util'

const fn = process.argv[2] || process.env.ERR_FILE || 'err.log'
const file = createWriteStream(`${__dirname}/${fn}`, { flags : 'w' })

/**
 * Use instead of `console.error()`
 *
 * Logs to file and stdout both
 * @example
 * writeError('foo')
 */

const writeError = (data: any): void => {
  file.write(format(data) + '\n')
  process.stdout.write(format(data) + '\n')
}

export default writeError
