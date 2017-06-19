// @flow

/**
 * Gets `document.referrer`
 * @example
 * getReferrer()
 */

const getReferrer = (): string =>
  document.referrer || ''

export default getReferrer
