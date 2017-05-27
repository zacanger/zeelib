// @flow

/**
 * Remove non-alpha chars from string
 */

const removeNonAlpha = (str: string): string =>
  str.replace(/[^A-Za-z ]+/g, '')

export default removeNonAlpha
