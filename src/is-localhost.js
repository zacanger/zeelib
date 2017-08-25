// @flow

/**
 * Returns true if running on localhost
 * @example
 * isLocalhost() // => true
 */

const isLocalhost = () => {
  const h = window && window.location && window.location.hostname
  return !!(
    [ 'localhost', '[::1]'].includes(h) ||
    h.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
  )
}

export default isLocalhost
