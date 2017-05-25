// @flow

/**
 * https to http
 */

const toHttp = (str: string): string =>
  str.replace(/^https/, 'http')

export default toHttp
