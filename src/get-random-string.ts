/**
 * Returns random string of n length (defaults to 8)
 * @example
 * getRandomString()
 * getRandomString(32)
 */

/** @deprecated will be removed in v13 */
export const getRandomString = (n: number = 8): string =>
  Math.random().toString(36).substring(n)
