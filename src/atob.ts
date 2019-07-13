/**
 * `window.atob` for node and browser
 * @example
 * atob('YXNkZg==') // => 'asdf'
 */

const atob = (str: string): string =>
  Buffer.from(str, 'base64').toString('utf8')

export default atob
