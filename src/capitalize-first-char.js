// @flow

/**
 * Capitalizes the first character of string
 */

const capitalizeFirstChar = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1)

export default capitalizeFirstChar
