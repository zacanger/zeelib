/**
 * Capitalizes the first character of string
 * @example
 * capitalizeFirstChar('things and stuff') // => 'Things and stuff'
 */

export const capitalizeFirstChar = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1)
