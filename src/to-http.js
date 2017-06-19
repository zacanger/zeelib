// @flow

const toHttp = (str: string): string => {
  console.error('`toHttp` is deprecated.')
  return str.replace(/^https/, 'http')
}

export default toHttp
