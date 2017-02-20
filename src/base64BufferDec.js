// @flow

const base64BufferDec = (str: string) : string =>
  new Buffer(str, 'base64').toString('utf8')

export default base64BufferDec
