// @flow

/**
 * Run a function on n (any), and time it
 * @example
 * timeTest(1, () => true) // time: 0.166ms ; true
 */

const timeTest = <A, B>(n: A, cb: (A) => B): B => {
  console.time('time')
  const r = cb(n)
  console.timeEnd('time')
  return r
}

export default timeTest
