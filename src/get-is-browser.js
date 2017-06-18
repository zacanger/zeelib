// @flow

/**
 * Returns true if code is in browser
 * @example
 * getIsBrowser()
 */

const getIsBrowser = (): bool =>
  !!(typeof window !== 'undefined' && typeof process === 'undefined')

export default getIsBrowser
