// @flow

const base64BufferEnc = (str: string) : string =>
  new Buffer(str).toString('base64')

export default base64BufferEnc
