// @flow

/**
 * Returns true if code is in browser
 */

const getIsBrowser = (): bool =>
  !!(typeof window !== 'undefined' && typeof process === 'undefined')

export default getIsBrowser
