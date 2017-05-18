/* eslint-disable standard/no-callback-literal */

/**
 * General-ish utility for async, eager thunks
 * Adapted from kyle simpson's blog
 * Example: `const something = makeThunk(fn, param1, param2)`
 * @param {function} any
 * @param {any} ...args
 * @returns {function} thunk
 */

const makeThunk = (fn, ...args) => {
  let v = {}
  let fns = []

  fn(...args, function wait (...args) {
    if (!('args' in v)) {
      v.args = args
    }
    if (fns.length > 0) {
      while (fns.length > 0) {
        fns.shift()(...v.args)
      }
    }
  })
  return function thunk (cb) {
    if ('args' in v) {
      cb(...v.args)
    } else {
      fns.push(cb)
    }
  }
}

export default makeThunk
