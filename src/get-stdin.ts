/**
 * Get stdin and do something with it.
 * @example
 * getStdin((str) => {
 *   console.log(str.split(''))
 * })
 */

export const getStdin = (f: (a: string) => void): void => {
  let b: string = ''
  process.stdin.setEncoding('utf8')
  process.stdin.on('data', (s) => {
    b += s.toString()
  })
  process.stdin
    .on('end', () => {
      f(b)
    })
    .resume()
}
