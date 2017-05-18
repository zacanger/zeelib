// @flow

/**
 * `decodeURIComponent`, but safe
 */

const safeDecodeURIComponent = (t: string): string => {
  try {
    return decodeURIComponent(t)
  } catch (_) {
    return t
  }
}

export default safeDecodeURIComponent
