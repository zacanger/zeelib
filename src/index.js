// a little kinda lib thingy idk
// just a bunch of utils really
// some stuff that's basically polyfills-ish
// needs node (there's fs stuff, etc.)
// some is modded stuff from:
// gh:nervgh/yum.js,
// gh:shapeshed/stringbean

import fs from 'fs'
import util from 'util'
import os from 'os'
import { execFile } from 'child_process'

// returns true if val is NaN
export const isNaN = Number.isNaN

// returns true if val is num
export const isNumber = v =>
  typeof v === 'number' && isNaN(v)

// returns true if num is int
export const isInteger = Number.isInteger || function (n) {
  return (n | 0) === n
}

// returns true if num is float
export const isFloat = n =>
  (n | 0) !== n

// returns true if num is odd
export const isOdd = n =>
  (n & 1) !== 0

// returns true if num is even
export const isEven = n =>
  (n & 1) === 0

// returns greatest common divisor
export function greatestCommonDivisor () {
  let i = arguments.length
  let a = arguments[--i]
  while (a && i) {
    let b = arguments[--i]
    while (b) {
      var c = a % b
      a = b
      b = c
    }
  }
  return a
}

// returns least common multiple
export function leastCommonMultiple () {
  let i = arguments.length
  let a = arguments[--i]
  while (a && i) {
    let b = arguments[--i]
    a = a * b / greatestCommonDivisor(a, b)
  }
  return a
}

// returns true if val is obj
export const isObject = v =>
  objToString.call(v) === '[object Object]'

// toString
export const objToString = Object.prototype.toString

// compares params by val
export const isEqualObj = (a, b) => {
  if (a === b) {
    return true
  }
  return JSON.stringify(a) === JSON.stringify(b)
}

// clones object
export const objClone = (obj) => {
  // Number, String, Boolean, Function, null, undefined
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // Date and RegExp
  if (isDate(obj) || isRegExp(obj)) {
    return new obj.constructor(obj)
  // Array and Object
  } else {
    let copy = isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj))
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = this.clone(obj[key])
      }
    }
    return copy
  }
}

// copy vals of all enumerable own properties from source obj to target obj
export const objAssign = Object.assign || function (target, source) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] = source[key]
    }
  }
  return target
}

// inherits target by source
export const objInherit = (target, source) => {
  target.super_ = source
  target.prototype = Object.create(target.super_.prototype)
  let descriptor = objClone(target.super_.descriptor) || {}
  descriptor.constructor = {
    value        : target
  , enumerable   : false
  , writable     : true
  , configurable : true
  }
  Object.defineProperties(target.prototype, descriptor)
}

// returns true if val is bool
export const isBoolean = v =>
  typeof v === 'boolean'

// returns true if val is str
export const isString = v =>
  typeof v === 'string'

// returns true if val is date
export const isDate = v =>
  objToString.call(v) === '[object Date]'

// returns true if val is regex
export const isRegExp = v =>
  objToString.call(v) === '[object RegExp]'

// returns true if val is arr
export const isArray = Array.isArray || function (v) {
  return objToString.call(v) === '[object Array]'
}

export const isArrayLike = v =>
  v && isNumber(v.length)

// returns true if val is fn
export const isFunction = v =>
  typeof v === 'function'

// these don't go extending stuff

// deepcopy obj
export const deepCopy = o => {
  let newObj
  if (!o || typeof o !== 'object') {
    return o
  }
  if (isArray(o)) {
    return o.map(it => deepCopy(it))
  }
  newObj = {}
  Object.keys(o).forEach(prop => {
    newObj[prop] = deepCopy(o[prop])
  })
  return newObj
}

// shallow copy (top level)
export const shallowCopy = o => {
  let newObj
  if (!o || typeof o !== 'object') {
    return o
  }
  if (isArray(o)) {
    return o.slice(0)
  }
  newObj = {}
  Object.keys(o).forEach(prop => {
    newObj[prop] = o[prop]
  })
  return newObj
}

// copy obj, either shallow or deep
export const copy = (o, shallow) => {
  let copyfn = shallow ? shallowCopy : deepCopy
  return copyfn(o)
}
// returns true if val is primitive
export const isPrimitive = v => {
  if (v === null) {
    return true
  }
  const t = typeof v
  return t !== 'object' && t !== 'function'
}

// returns true if val is null
export const isNull = v =>
  v === null

// returns true if val is undefined
export const isUndefined = v =>
  v === undefined

// returns true if val is defined
export const isDefined = v =>
  v !== undefined

// returns true if val is DOM el
export const isElement = v =>
  objToString.call(v).slice(8, 12) === 'HTML'

// escapes html
export const escapeHTML = str =>
  str.replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')

// unescapes escaped html
export const unescapeHTML = str =>
  str.replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"')

// removes non-alphabetic chars
export const removeAlpha = str =>
  str.replace(/[^A-Za-z ]+/g, '')

// removes non-alpha-numeric chars
export const removeNonAlphanumeric = str =>
  str.replace(/[^A-Za-z0-9 ]+/g, '')

// removes non-numeric chars
export const removeNonNumeric = str =>
  str.replace(/[^0-9-.]/g, '')

// removes numeric chars
export const removeNumeric = str =>
  str.replace(/[0-9]/g, '')

// base64 encodes
export const base64Encode = str =>
  new Buffer(str).toString('base64')

// base64 decodes
export const base64Decode = str =>
  new Buffer(str, 'base64').toString('utf8')

// capitalizes first char
export const capitalize = str =>
  str.charAt(0).toUpperCase() + str.slice(1)

// colour utilities
export const hex = /^#?[a-f0-9]{3}|[a-f0-9]{6}$/i

// takes string colour, returns string
export const trimHash = color =>
  typeof color === 'string' ? color.replace('#', '') : color

// takes string colour, returns string
export const trimSpaces = color =>
  typeof color === 'string' ? color.replace(/\s/g, '') : color

// takes string colour, returns bool
export const isHexBased = color =>
  hex.text(color)

// takes string colour, returns bool
export const isValidHex = color =>
  isHexBased(trimSpaces(color))

// takes string colour, returns either string or null
export const normalizeColor = color => {
  let nextColor = trimSpaces(color)
  if (!isHexBased(color)) {
    return null
  }
  nextColor = trimHash(nextColor)
  if (nextColor.length === 3) {
    nextColor = nextColor.replace(/./g, d => d + d)
  }
  return nextColor.toUpperCase()
}

// gives you a random colour
export const randomCol = () => {
  const hex = Math.floor(Math.random() * 16777215).toString(16)
  const pad = '000000'
  return '#' + (pad + hex).slice(-pad.length)
}

// json utils (mostly node ones)

// checks if is json
export const isJson = str => {
  try {
    JSON.parse(str)
  } catch (e) {
    return false
  }
  return true
}

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

// rot13
export function rot13 (s) {
  return (s || this).split('').map((_) => {
    if (!_.match(/[A-Za-z]/)) {
      return _
    }
    const c = Math.floor(_.charCodeAt(0) / 97)
    const k = (_.toLowerCase().charCodeAt(0) - 83) % 26 || 26
    return String.fromCharCode(k + ((c === 0) ? 64 : 96))
  }).join('')
}

// generates short uid
export const shortUid = () =>
  ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4)

// i don't know why
export const otherShortUid = () =>
  (Math.random().toString(36) + '00000000000000000').slice(2, 10)

export const randomHex32 = (hexN = '') =>
  hexN.length < 32
    ? randomHex32(hexN + (Math.random() + Math.random()).toString(16).slice(2))
    : hexN.slice(0, 32)

// normalize text
export const normText = text =>
  text.toLowerCase().match(/[a-z0-9]([a-z0-9.]*[a-z0-9])?/ig).join(' ')

// credit: texas toland
// export const pipe = (x, ...s) =>
// s.reduce((y, f) =>
// f(y), x)
// more verbosely
// const pipe = (initialValue, ...fns) =>
// fns.reduce((state, fn) => fn(state), initialValue)

// convert camelCase to lisp-case
export const camelCaseToLispCase = str => (
  str.replace(/[A-Z]/g, match => (
    '-' + match.toLowerCase())).toLowerCase()
)

// convert camelCase to snake_case
export const cameCaseToSnakeCase = str => (
  str.replace(/[A-Z]/g, match => (
    '_' + match.toLowerCase())).toLowerCase()
)

// convert lisp-case to camelCase
export const lispCaseToCamelCase = str => (
  str.toLowerCase().replace(/-[a-z]/g, match => (
    match.slice(1).toUpperCase()
  ))
)

// convert snake_case to camelCase
export const snakeCaseToCamelCase = str => (
  str.replace(/(_\w)/g, match => (
    match[1].toUpperCase())
  )
)

// use instead of `console.error()`; logs to file and stdout both
const fn = process.argv[2] || process.env.ERR_FILE || 'err.log'
const file = fs.createWriteStream(`${__dirname}/${fn}`, { flags : 'w' })
export const err = d => {
  file.write(util.format(d) + '\n')
  process.stdout.write(util.format(d) + '\n')
}

// gh:artificerentertainment
export const nco = (variable, defaultValue) =>
  (variable === null || typeof variable === 'undefined') ? defaultValue : variable

export const niceDate = `[${Date(Date.now() * 1000).match(/(\d{2}:\d{2}:\d{2})/)[1]}]`

// usage: // isType(1, 'number', 'string') ; isType([], 'array') ; etc.
export function isType (a) {
  let types = Array.prototype.slice.call(arguments, 1)

  for (let i = 0, len = types.length; i < len; i++) {
    let type = String(types[i]).toLowerCase()

    if ((type === 'null' && a === null)        ||
        (type === typeof a)                    ||
        (type === 'object' && a === Object(a)) ||
        (type === 'array' && isArray && isArray(a)) ||
        Object.prototype.toString.call(a).slice(8, -1).toLowerCase() === type) {
      return true
    }
  }
  return false
}

export const xor = (a, b) =>
  !a !== !b

export const lesser = (a, b) =>
  (a < b) ? a : b

// cred : gh:texastoland
// {key, ...clone} = source
export const cloneWithout = (source, ...keys) =>
  exports.copyWithout({}, source, ...keys)
// {key, ...copy} = {...target, ...source}
export const copyWithout = (target, source, ...keys) => {
  const copy = objAssign(target, source)
  for (const key of keys) {
    delete copy[key]
  }
  return copy
}

// left-pad (yes, really)
export const leftpad = (str, len, pd = ' ') =>
  Array(len > str.length ? 1 + len - str.length : 0).join(pd) + str

// positive/negative nums with type checking
export const isPositive = (x) =>
  +x === x && x > 0
export const isNegative = (x) =>
  +x === x && x < 0

// transpose a 2-dimensional matrix like [[1,2,3],[4,5,6],[7,8,9]]
export const transpose = m =>
  m.map((r, ri) =>
    r.map((c, ci) => m[ci][ri]))

// transpose a flat matrix like [1,2,3,4,5,6,7,8,9]
export const transposeFlat = (m, l = Math.sqrt(m.length) | 0) => m.map((c, i) =>
  m[(i % l) * l + i / l | 0]
)

// reverse digits with correct sign handling
export const revNum = (n) =>
  Math.sign(n) * ('' + Math.abs(n)).split('').reverse().join('') || 0

// is num power of two
export const Po2 = (n) =>
  1 << (n.toString(2).length - 1) === n

// not sure which of these is better
export const userHome = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']
// export const userHome = process.env.HOME ||
//   process.env.HOMEPATH ||
//   process.env.USERPROFILE
// export const userHome = os.homedir()

// adapted from facebook utility scripts
// run fn n times
// return 0 on success
// return code of last failed if no more tries left
export function tryExecNTimes (funcToRetry, retriesLeft, onEveryError) {
  const exitCode = funcToRetry()
  if (exitCode === 0) {
    return exitCode
  } else {
    if (onEveryError) {
      onEveryError()
    }
    retriesLeft--
    console.log(`Command failed, ${retriesLeft} retries left`)
    if (retriesLeft === 0) {
      return exitCode
    } else {
      return tryExecNTimes(funcToRetry, retriesLeft, onEveryError)
    }
  }
}

// check if a terminal supports colour
const isWin = () => process.platform === 'win32'
const isColour = () => {
  const termColour = /^screen|^xterm|^vt100|color|ansi|cygwin|linux/i
  return !!process.env.COLORTERM || termColour.test(process.env.TERM)
}
export const hasColour = isWin() || isColour()

// i know this is pointless but i think it's cute
export const sleep = ms => {
  const start = new Date().getTime()
  while ((new Date().getTime() - start) < ms) {}
}

// some dom things
export const scrollTop = () =>
  global.scrollTo(0, 0)

export const getWidth = () =>
  global.innerWidth ||
  global.document.documentElement.clientWidth

export const getHeight = () =>
  global.innerHeight ||
  global.document.documentElement.clientHeight

export const getScrollBarWidth = () =>
  global.innerWidth - global.document.documentElement.clientWidth

// logging things
export const throwError = err => {
  throw new Error(err)
}

export function logWithTimestamp () {
  const date = new Date()
  const timestamp = date.getDate() + '/' + date.getMonth() + ' ' + date.getHours() + ':' +
  date.getMinutes() + ':' + date.getSeconds() + '.' + date.getMilliseconds()
  const message = Array.prototype.slice.call(arguments)
  message.unshift('--')
  message.unshift(timestamp)
  console.log.apply(console, message)
}

export const withInfo = (str = '') =>
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

// invokes until function returns truthily
// examples:
// Succeeds after 15 calls
// let i = 0
// invoker(20, 100)(() => {
// console.log(i)
// return ++i > 15
// }, console.log)
// Fails after 20 calls
// let ii = 0
// invoker(20, 100)(() => {
// console.log(ii)
// return ++ii > 22
// }, console.log)
export const invoker = (limit, interval) => (fn, cb) => {
  let current = 0
  let _fn = () => {
    current++
    let result = fn()
    if (result) {
      cb(null, result)
    } else if (current < limit) {
      setTimeout(_fn, interval)
    } else {
      cb(new Error('Limit exceeded!'), null)
      cb = () => {}
    }
  }
  _fn()
}

// run only once
// usage:
// function foo (cb) {
// cb = once(cb)
// if (!cb.called) {
// // do things
// }
// }
// export function once (fn) {
// let f = function () {
// if (f.called) {
// return f.value
// }
// f.called = true
// return f.value = fn.apply(this, arguments)
// }
// f.called = false
// return f
// }

// you should never rely on something like this to validate an email.
// email validation is basically impossible, so find some stable library
// to do it for you.
// export const isEmail = email =>
//   /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
// export const isEmail = email =>
//   /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
// export const isEmail = email =>
//   /^([\w-\.]*(\+[a-z0-9-]+)?@([\w-]+\.)+[\w-]{2,10})?$/.test(email)

export const transparentGif = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
export const brokenImg = 'data:;base64,iVBORwOKGO=='

export const memoizeSimple = fn => {
  let
    cachedArg
  , cachedRes
  return arg => {
    if (cachedArg === arg) {
      return cachedRes
    }
    cachedArg = arg
    cachedRes = fn(arg)
    return cachedRes
  }
}

export const memoizeWithCache = fn => (arg, memoCache) => {
  if (memoCache.arg === arg) {
    return memoCache.res
  }
  const res = fn(arg)
  memoCache.arg = arg
  memoCache.res = res
  return res
}

// export function memoize = function(fn) {
// const cache = {}
// const fnVal = function(val) {
// return val
// }
// return function() {
// const key = fnVal.apply(this, arguments)
// if (key in cache) {
// return cache[key]
// } else {
// const v = fn.apply(this, arguments)
// cache[key] = v
// return v
// }
// }
// }
//
// function memoize (fn) {
// var cache = {}
// return function (n) {
// var key = JSON.stringify([].slice.call(arguments))
// if (!(key in cache)) {
// cache[key] = fn.apply(null, arguments)
// }
// return cache[key]
// }
// }

// see: gh:egoist/switchy
export const noSwitch = (conds = {}) => c => {
  if (typeof conds[c] === 'function') {
    return conds[c]()
  } else if (typeof conds.default === 'function') {
    return conds.default()
  }
}

export const newlinesToSpaces = str =>
  str.replace(/\s+/g, ' ').trim()

export const newlineRemove = str =>
  str.replace(/(\r\n|\n|\r)/gm, '')

export const removeAllWhitespace = str =>
  str.replace(/^\s+|\s+$/, '')

// add \n to every line
export const addNewlines = s =>
  s.split('\t').join('  ').split('\n').map((e, i, a) => e + '\n')

export const isEmptyStr = str => {
  if (str === undefined || str === null) {
    return true
  }
  return (/^[ \t\s]*$/).test(str)
}

export const isAlphanumeric = str =>
  (/[0-9a-zA-Z]+/).test(str)

export const inlineString = str => {
  str = str.replace(/(\r\n|\n|\r)/gm, ' ')
  return str.replace(/[\s]+/gm, ' ')
}

//
export const getNodeModules = () => {
  const nodeModules = {}
  fs.readdirSync('node_modules')
    .filter(a => ['.bin'].indexOf(a) === -1)
    .forEach(b => {
      nodeModules[b] = 'commonjs ' + b
    })
  return nodeModules
}

export const minify = str =>
  str.replace(/\n/g, '').replace(/\s\s+/g, ' ')

// this is really long. i didn't write this. geez.
export const isMobileOrTablet = device =>
  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(device) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(device.substr(0, 4))

// export const curry = fn => {
// const length = fn.length
// const acc = (...args) => {
// if (args.length === length) return fn(...args)
// return (...args) => acc(...args.concat(args))
// }
// return acc
// }

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

// usage :
// lighten
// var NewColor = LightenDarkenColor('#F06D06', 20)
// darken
// var NewColor = LightenDarkenColor('#F06D06', -20)
export const LightenDarkenColor = (col, amt) => {
  let
    usePound = false
  , num      = parseInt(col, 16)
  , r        = (num >> 16) + amt
  , b        = ((num >> 8) & 0x00FF) + amt
  , g        = (num & 0x0000FF) + amt

  if (col[0] === '#') {
    col = col.slice(1)
    usePound = true
  }
  if (r > 255) {
    r = 255
  } else if (r < 0) {
    r = 0
  }
  if (b > 255) {
    b = 255
  } else if (b < 0) {
    b = 0
  }
  if (g > 255) {
    g = 255
  } else if (g < 0) {
    g = 0
  }
  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}

// takes input in format #rrggbb (hex)
export const complimentaryCols = s =>
  '#' + (1e5 + (8 ** 8 + ~('0x' + s.slice(1))).toString(16)).slice(-6)
// or
// c=>c.replace(/\w/g,x=>(15-`0x${x}`).toString(16))

export const objectFromEntries = entries => {
  const res = {}
  const len = entries.length
  for (let i = 0; i < len; ++i) {
    const ent = entries[i]
    const key = ent[0]
    const val = ent[1]
    res[key] = val
  }
  return res
}

// credit: gh:spicydonuts
export const findWhere = (fn, array) => {
  let found = null
  array.some((item, i) => {
    if (fn(item, i)) {
      found = item
      return true
    }
    return false
  })
  return found
}

// credit: gh:spicydonuts
export const dropWhere = (fn, array) => {
  const keepers = []
  array.forEach((item, i) => {
    if (!fn(item, i)) {
      keepers.push(item)
    }
  })
  if (array.length === keepers.length) {
    return array
  }
  return keepers
}

// close-to-complete email validation
export const isEmail = email =>
  /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(email)

export const curry = function (fn) {
  const originalArguments = getFunctionArguments(fn) || []

  const makeCurriedFunc = function () {
    const givenArguments = arguments || []
    if (givenArguments.length < originalArguments.length) {
      return function (...rest) {
        return makeCurriedFunc(...givenArguments, ...rest)
      }
    } else {
      return fn(...givenArguments)
    }
  }

  return function () {
    return makeCurriedFunc(...arguments)
  }
}

export const getFunctionArguments = function (fn) {
  if (typeof fn !== 'function') {
    throw new Error('Not a function')
  }

  const functionAsString = fn.toString()

  const args = functionAsString
    .match(/\(.*?\)/)[0]     // match everything between brackets
    .replace(/[()]/gi, '')   // remove brackets
    .replace(/\s/gi, '')     // remove all whitespace
    .split(',')              // split on the commas

  return args.filter(x => x) // remove possible empty string from the result
}

// returns true if all items pass predicate fn
export const all = curry((predicate, list) =>
  !!list.reduce && (typeof predicate === 'function') && list.reduce((result, current) =>
    !result ? false : !!predicate(current)
  , true)
)

// r->l composition
export const compose = (...fns) =>
  pipe(...reverse(fns))

// export const compose = (f, g) =>
//   x =>
//     f(g(x))

export const identity = x => x

export const memoize = (fn) => {
  const results = new Map()
  return (...args) => {
    const key = args.toString()
    if (!results.get(key)) {
      results.set(key, fn(...args))
    }
    return results.get(key)
  }
}

// returns true if current obj has prop that equals given val
export const propEq = curry((prop, value, data) =>
  data[prop] !== undefined && data[prop] === value
)

// reduces data to single val
export const reduce = curry((fn, initialValue, data) => {
  let reducedValue = initialValue
  for (let i = 0; i < data.length; i++) {
    reducedValue = fn(reducedValue, data[i])
  }
  return reducedValue
})

// reverses array
export const reverse = (items) => {
  let result = []
  for (let i = items.length - 1; i >= 0; i--) {
    result.push(items[i])
  }
  return result
}

// l->r composition
export const pipe = (...fns) =>
  data => reduce((v, fn) => fn(v), data)(fns)

// only calls fn once; subsequent calls just return first val
export const once = (fn) => {
  let returnValue
  return (...args) => {
    if (!returnValue) {
      returnValue = fn(...args)
    }
    return returnValue
  }
}

export const unfold = (fn, seed) => {
  const r = fn(seed)
  if (!Array.isArray(r)) {
    return []
  }
  return [r[0]].concat(unfold(fn, r[1]))
}

export const getTerminalCols = () =>
  process.stdout.columns

export const getTerminalRows = () =>
  process.stdout.rows

export const getTerminalSize = () => ({
  cols : process.stdout.columns
, rows : process.stdout.rows
})

export function toType (val) {
  const argLen = arguments.length
  if (argLen !== 1) {
    throw new Error('Please only pass one argument')
  }
  return ({}).toString.call(val).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
