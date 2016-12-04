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

// reverses array
export const reverse = (items) => {
  let result = []
  for (let i = items.length - 1; i >= 0; i--) {
    result.push(items[i])
  }
  return result
}

// r->l composition
export const compose = (...fns) =>
  pipe(...reverse(fns))

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

export const not = (a) =>
  (b) =>
    a !== b

export const pair = (f, s) =>
  [f, s]

export const map = (fn, xs) =>
  xs.map(fn)

export const zip = (xs, l) =>
  map((x, i) => pair(x, l[i]), xs)

export const zipWith = (fn, xs, arr) =>
  map((x, i) => fn.apply(fn, pair(x, arr[i])), xs)

export const invoke = (fn, ...args) =>
  fn(...args)

export const zipThen = (after, xs) =>
  (...list) =>
    after.apply(after, zipWith(invoke, xs, list))
