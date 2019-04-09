// @flow

const isHiddenFile = (file: string): bool =>
  file.startsWith('.')

export default isHiddenFile
