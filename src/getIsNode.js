// @flow

const getIsNode = (): bool =>
  process && !!process.version

export default getIsNode
