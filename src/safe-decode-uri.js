// @flow

/**
 * `decodeURI`, but safe
 */

const safeDecodeURI = (str: string): string => {
  try {
    return decodeURI(str)
  } catch (_) {
    return str
  }
}

export default safeDecodeURI
