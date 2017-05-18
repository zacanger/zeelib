// @flow

/**
 * Returns a regex to test for valid hex
 */

const getHexRegex = (): RegExp =>
  /^#?[a-f0-9]{3}|[a-f0-9]{6}$/i

export default getHexRegex
