// @flow

/**
 * Fix windows-style path sep
 * cred: gh:sindresorhus/slash
 * @example
 * fixWindowsSlashes('C:\\Windows\\Something') // => 'C:/Windows/Something'
 */

const fixWindowsSlashes = (str: string): string => {
  const isExtendedLengthPath = /^\\\\\?\\/.test(str)
  const hasNonAscii = /[^\x00-\x80]+/.test(str)
  if (isExtendedLengthPath || hasNonAscii) return str
  return str.replace(/\\/g, '/')
}

export default fixWindowsSlashes
