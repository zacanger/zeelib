// @flow

const toHttp = (s: string): string =>
  s.replace(/^https/, 'http')

export default toHttp
