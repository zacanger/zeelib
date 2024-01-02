/**
 * Log a value to console, and return that value
 * @example
 * const logger = tap('This is the thing!')
 * logger(2) // => this is the thing 2 ; 2
 */

export const tap = (msg: string) => <A>(a: A): A => {
  console.log(msg, a)
  return a
}
