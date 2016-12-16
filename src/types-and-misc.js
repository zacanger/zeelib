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

// usage: // isType(1, 'number', 'string') ; isType([], 'array') ; etc.
export function isType (a) {
  let types = Array.prototype.slice.call(arguments, 1)

  for (let i = 0, len = types.length; i < len; i++) {
    let type = String(types[i]).toLowerCase()

    if ((type === 'null' && a === null)             ||
        (type === typeof a)                         ||
        (type === 'object' && a === Object(a))      ||
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
export const isPow2 = (n) =>
  1 << (n.toString(2).length - 1) === n

export function toType (val) {
  const argLen = arguments.length
  if (argLen !== 1) {
    throw new Error('Please only pass one argument')
  }
  return ({}).toString.call(val).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

export const isPromise = (a) =>
  a && typeof a.then === 'function'
