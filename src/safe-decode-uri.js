// @flow

/**
 * `decodeURI`, but safe
 * @example
 * safeDecodeURI('2!!!!0/,.?+=*^\n|\@@@@') // => '2!!!!0/,.?+=*^\n|@@@@'
 */

const safeDecodeURI = (str: string): string => {
  try {
    return decodeURI(str)
  } catch (_) {
    return str
  }
}

export default safeDecodeURI
