import fs from 'fs'
import util from 'util'
import os from 'os'
import { execFile } from 'child_process'
import { createInterface } from 'readline'
import { createServer } from 'net'

// read json file, parse it, call cb with obj or err
export const readJson = (file, cb) => {
  fs.readFile(file, 'utf8', (err, json) => {
    if (err) {
      cb(err)
      return
    }
    let data
    try {
      data = JSON.parse(json)
    } catch (e) {
      cb(e)
      return
    }
    cb(null, data)
  })
}

// same as above, but sync
export const readJsonSync = file =>
  JSON.parse(fs.readFileSync(file, 'utf8'))

// write with data
export const writejson = (file, data, indent, cb) => {
  if (typeof cb !== 'function') {
    cb = indent
    indent = 0
  }
  let json
  try {
    json = JSON.stringify(data, null, indent)
  } catch (e) {
    cb(e)
    return
  }
  fs.writeFile(file, json, 'utf8', cb)
}

// write json with data, sync
export const writeJsonSync = (file, data, indent) => {
  if (typeof indent !== 'number') {
    indent = 0
  }
  fs.writeFileSync(file, JSON.stringify(data, null, indent), 'utf8')
}

// use instead of `console.error()`; logs to file and stdout both
const fn = process.argv[2] || process.env.ERR_FILE || 'err.log'
const file = fs.createWriteStream(`${__dirname}/${fn}`, { flags : 'w' })
export const err = d => {
  file.write(util.format(d) + '\n')
  process.stdout.write(util.format(d) + '\n')
}

const withInfo = (str = '') =>
  `${str}:${os.hostname()}:${process.pid}`

export const logWithInfo = (str = '') =>
  console.log(withInfo(str))

// this is a tiny router. hence the name.
export const tinyRouter = (pathname, response) => {
  let html, filePath
  if (pathname !== '/favicon.ico') {
    try {
      filePath = './' + pathname
      console.log('loading ' + filePath)
      html = fs.readFileSync(filePath)
      response.write(html)
      response.end()
    } catch (err) {
      console.log('unable to load ' + filePath)
      response.end()
    }
  }
}

export const getNodeModules = () => {
  const nodeModules = {}
  fs.readdirSync('node_modules')
    .filter(a => ['.bin'].indexOf(a) === -1)
    .forEach(b => {
      nodeModules[b] = 'commonjs ' + b
    })
  return nodeModules
}

export const open = (args, opts, cb) => {
  args = [args]
  const cmd = process.platform === 'win32'
  ? 'cmd'
  : process.platform === 'darwin'
    ? 'open'
    : 'xdg-open'
  return execFile(cmd, args, opts, cb)
}

// options:
// bold, italic, underline, inverse,
// white, grey, black, blue, cyan, green, magenta, red, yellow
// usage:
// const c = require('./color')
// console.log(c.bold(c.blue('foo')))
const colorize = (color, text) => {
  const codes = util.inspect.colors[color]
  return `\x1b[${codes[0]}m${text}\x1b[${codes[1]}m`
}
const colors = () => {
  const val = {}
  Object.keys(util.inspect.colors).forEach(color => {
    val[color] = text => colorize(color, text)
  })
  return val
}
export const clr = colors()

// adapted from create-react-app's prompt
// prompt('Do the thing?') // with 'no' default
// prompt('Do the thing?' 1) // with 'yes' default
export const termPrompt = (question, isYesDefault) => {
  return new Promise(resolve => {
    const rlInterface = createInterface({
      input  : process.stdin
    , output : process.stdout
    })

    const hint = isYesDefault ? '[Y/n]' : '[y/N]'
    const message = `${question} ${hint}\n`

    rlInterface.question(message, answer => {
      rlInterface.close()

      const useDefault = answer.trim().length === 0
      if (useDefault) return resolve(isYesDefault)

      const isYes = answer.match(/^(yes|y)$/i)
      return resolve(isYes)
    })
  })
}

// find next open port
// findPort(8000, (err, port) => {})
export const findPort = (port, cb) => {
  const server = createServer(() => {})
  const onListen = () => {
    server.removeListener('error', onError)
    server.close()
    cb(null, port)
  }
  const onError = err => {
    server.removeListener('listening', onListen)
    if (err.code !== ('EADDRINUSE' || 'EACCESS')) {
      return cb(err)
    }
    findPort(port + 1, cb)
  }
  server.once('error', onError)
  server.once('listening', onListen)
  server.listen(port)
}

// not sure which of these is better
export const userHome = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']
// export const userHome = process.env.HOME ||
//   process.env.HOMEPATH ||
//   process.env.USERPROFILE
// export const userHome = os.homedir()

// check if a terminal supports colour
const isWin = () => process.platform === 'win32'
const isColour = () => {
  const termColour = /^screen|^xterm|^vt100|color|ansi|cygwin|linux/i
  return !!process.env.COLORTERM || termColour.test(process.env.TERM)
}
export const hasColour = isWin() || isColour()

export const getTerminalCols = () =>
  process.stdout.columns

export const getTerminalRows = () =>
  process.stdout.rows

export const getTerminalSize = () => ({
  cols : process.stdout.columns
, rows : process.stdout.rows
})
