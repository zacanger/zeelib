// @flow

const fixWindowsSlashes = (str: string): string => {
  console.error('`fixWindowsSlashes` is deprecated. Please use the `slash` lib.')
  const isExtendedLengthPath = /^\\\\\?\\/.test(str)
  const hasNonAscii = /[^\x00-\x80]+/.test(str)
  if (isExtendedLengthPath || hasNonAscii) return str
  return str.replace(/\\/g, '/')
}

export default fixWindowsSlashes
