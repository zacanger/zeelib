// @flow

/**
 * Run a function on n (any), and time it
 */

const timeTest = (n: any, cb: any): any => {
  console.time('time')
  const r = cb(n)
  console.timeEnd('time')
  return r
}

export default timeTest
