// @flow

/**
 * Returns true if the string is valid JSON
 */

const isJson = (str: string): bool => {
  try {
    JSON.parse(str)
    return true
  } catch (_) {
    return false
  }
}

export default isJson
