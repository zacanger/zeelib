// @flow

const safeDecodeURI = (t: string): string => {
  try {
    return decodeURI(t)
  } catch (_) {
    return t
  }
}

export default safeDecodeURI
