// @flow

/**
 * Returns a hash based on current timestamp
 */

const getHashFromDate = (): string =>
  ((+new Date()) + Math.random() * 100).toString(32).replace(/\./, '')

export default getHashFromDate
