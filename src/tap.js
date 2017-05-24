// @flow

/**
 * Log a value to console, and return that value
 */

const tap = (msg: string) => <T> (a: T): T => {
  console.log(msg, a)
  return a
}

export default tap
