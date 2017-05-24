// @flow

/**
 * Invoke a function on any number of passed args
 */

const invoke = (fn: any, ...args: any): any =>
  fn(...args)

export default invoke
