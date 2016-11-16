// gh:artificerentertainment
export const nco = (variable, defaultValue) =>
  (variable === null || typeof variable === 'undefined') ? defaultValue : variable

export const niceDate = `[${Date(Date.now() * 1000).match(/(\d{2}:\d{2}:\d{2})/)[1]}]`

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

// i know this is pointless but i think it's cute
export const sleep = ms => {
  const start = new Date().getTime()
  while ((new Date().getTime() - start) < ms) {}
}

// logging things
export const throwErr = err => {
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

// see: gh:egoist/switchy
export const noSwitch = (conds = {}) => c => {
  if (typeof conds[c] === 'function') {
    return conds[c]()
  } else if (typeof conds.default === 'function') {
    return conds.default()
  }
}

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

// from MDN's parseFloat docs
export const filterFloat = value => {
  if (/^(-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(value)) {
    return Number(value)
  }
  return NaN
}

export const isObjectEmpty = obj =>
  obj.constructor === Object && Object.keys(obj).length === 0

export const splitStringOn = (str, spl) => {
  if (!str || typeof str !== 'string') {
    console.warn('Please pass a string as first param.')
  }
  spl = spl || ''
  const idx = str.indexOf(spl)
  return idx === -1 ? null : [
    str.substr(0, idx)
  , str.substr(idx + spl.length)
  ]
}

export const timeTest = (n, cb) => {
  console.time('time')
  const r = cb(n)
  console.timeEnd('time')
  return r
}

export const chunk = (arr, n) => {
  if (!arr.length || n) return []
  return [ arr.slice(0, n) ].concat(chunk(arr.slice(n), n))
}

export const unless = (cond, fn) =>
  !cond ? fn() : null

/*
export function unless () {
  let test = true
  const args = [...arguments]
  const conds = args.splice(args.length)
  const fn = args[args.length - 1]
  if (typeof fn !== 'function') {
    return console.warn('Last argument must be a function.')
  }
  conds.forEach(cond => {
    if (!cond) test = false
  })
  if (test) return fn()
}
*/

export const doubleUntil = (minSize = 0) =>
  function double (arr) {
    if (arr.length >= minSize) return arr
    return double([...arr, ...arr])
  }
