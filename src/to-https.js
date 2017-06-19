// @flow

const toHttps = (str: string): string => {
  console.error('`toHttps` is deprecated.')
  return str.replace(/^http:/, 'https:')
}

export default toHttps
