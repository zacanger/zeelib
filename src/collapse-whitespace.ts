/**
 * Collapses consecutive whitespace to a single space
 * @example
 * collapseWhitespace('a\n\r\t\nb') // => 'a b'
 */

export const collapseWhitespace = (str: string): string =>
  str.replace(/\s+/g, ' ')
