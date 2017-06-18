// @flow

/**
 * Get the value of a cookie by name
 * @example
 * document.cookie = 'foo=bar'
 * getCookie('foo') // => 'bar'
 */

const getCookie = (name: string): ?string => {
  const value = '; ' + document.cookie
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(';').shift()
}

export default getCookie
