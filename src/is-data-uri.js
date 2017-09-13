// @flow

/**
 * See if a string is a data uri
 * @example
 * isDataURI('data:text/plain;base64,SGVsbG8sIFdvcmxkIQo=') // => true
 */

const isDataURI = (s: string): bool =>
  /^data:(.+?\/.+?)?(;.+?=.+?)*(;base64)?,.*$/.test(s)

export default isDataURI
