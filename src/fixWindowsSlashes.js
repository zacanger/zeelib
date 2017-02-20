// gh:sindresorhus/slash
const fixWindowsSlashes = (str) => {
  const isExtendedLengthPath = /^\\\\\?\\/.test(str)
  const hasNonAscii = /[^\x00-\x80]+/.test(str)
  if (isExtendedLengthPath || hasNonAscii) return str
  return str.replace(/\\/g, '/')
}

export default fixWindowsSlashes
