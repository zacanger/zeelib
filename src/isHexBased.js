// @flow

import getHexRegex from './getHexRegex'

const isHexBased = (color: string): bool =>
  getHexRegex().test(color)

export default isHexBased
