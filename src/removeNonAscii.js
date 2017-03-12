// @flow

const removeNonAscii = (s: string): string =>
  s.replace(/[^\x20-\x7E]/g, '')

export default removeNonAscii