// @flow

/**
 * See if a string is a data url
 * @example
 * isDataURL('data:text/plain;base64,SGVsbG8sIFdvcmxkIQo=') // => true
 */

const isDataURL = (s: string): bool =>
  /^data:(.+?\/.+?)?(;.+?=.+?)*(;base64)?,.*$/.test(s)

export default isDataURL
