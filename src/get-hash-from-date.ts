/**
 * Returns a hash based on current timestamp
 * @example
 * getHashFromDate()
 */

export const getHashFromDate = (): string =>
  ((+new Date()) + Math.random() * 100).toString(32).replace(/\./, '')
