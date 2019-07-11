/**
 * `window.btoa` for node and browser
 * @example
 * btoa('asdf') // => 'YXNkZg=='
 */

const btoa = (str: string): string =>
  Buffer.from(str, 'utf8').toString('base64')

export default btoa
