// @flow

/**
 * Returns random string of n length (defaults to 8)
 */

const getRandomString = (n: number = 8): string =>
  Math.random().toString(36).substring(n)

export default getRandomString
