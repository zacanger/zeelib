import isHiddenFile from './is-hidden-file'

const removeExtension = (s: string = ''): string =>
  s.includes('.') && !isHiddenFile(s) ? s.substr(0, s.lastIndexOf('.')) : s

export default removeExtension
