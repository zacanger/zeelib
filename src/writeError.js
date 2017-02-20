import { createWriteStream } from 'fs'
import { format } from 'util'

// use instead of `console.error()`; logs to file and stdout both
const fn = process.argv[2] || process.env.ERR_FILE || 'err.log'
const file = createWriteStream(`${__dirname}/${fn}`, { flags : 'w' })
const writeError = (d) => {
  file.write(format(d) + '\n')
  process.stdout.write(format(d) + '\n')
}

export default writeError
