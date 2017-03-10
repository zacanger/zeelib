// @flow

import hex from './hexRegex'

const isHexBased = (color: string): bool =>
  hex.test(color)

export default isHexBased
