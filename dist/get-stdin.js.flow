// @flow

/**
 * Get stdin and do something with it.
 * @example
 * getStdin((str) => {
 *   console.log(str.split(''))
 * })
 */

const getStdin = (f: (a: string) => any): any => {
  let b = ''
  process.stdin.setEncoding('utf8')
  process.stdin.on('data', (s) => { b += s })
  process.stdin.on('end', () => { f(b) }).resume()
}

export default getStdin
