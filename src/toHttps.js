// @flow

/**
 * http to https
 */

const toHttps = (str: string): string =>
  str.replace(/^http:/, 'https:')

export default toHttps
