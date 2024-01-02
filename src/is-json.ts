/**
 * Returns true if the string is valid JSON
 * @example
 * isJson(JSON.stringify({ a: 'b' })) // => true
 */

export const isJson = (str: string): boolean => {
  try {
    JSON.parse(str)
    return true
  } catch {
    return false
  }
}
