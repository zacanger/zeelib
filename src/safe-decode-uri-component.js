// @flow

/**
 * `decodeURIComponent`, but safe
 */

const safeDecodeURIComponent = (str: string): string => {
  try {
    return decodeURIComponent(str)
  } catch (_) {
    return str
  }
}

export default safeDecodeURIComponent
