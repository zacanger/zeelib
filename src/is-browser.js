// @flow

/**
 * Returns true if code is in browser
 * @example
 * isBrowser()
 */

const isBrowser = (): bool =>
  !!(typeof window !== 'undefined' && typeof process === 'undefined')

export default isBrowser
