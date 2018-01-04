// @flow

import { createWriteStream } from 'fs'
import { format } from 'util'

const fn = process.argv[2] || process.env.ERR_FILE || 'err.log'
const file = createWriteStream(`${__dirname}/${fn}`, { flags: 'w' })

/**
 * Use instead of `console.error()`
 *
 * Logs to file and stdout both
 * @example
 * writeError('foo')
 */

const writeError = (data: string): void => {
  const msg = format(data) + '\n'
  file.write(msg)
  process.stdout.write(msg)
}

export default writeError
