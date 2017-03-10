// @flow

const toHttps = (s: string): string =>
  s.replace(/^http:/, 'https:')

export default toHttps
