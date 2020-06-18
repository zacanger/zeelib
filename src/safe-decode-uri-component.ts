/**
 * `decodeURIComponent`, but safe
 * @example
 * safeDecodeURIComponent('20%2F%3F') // => '20/?'
 */

const safeDecodeURIComponent = (str: string): string => {
  try {
    return decodeURIComponent(str)
  } catch {
    return str
  }
}

export default safeDecodeURIComponent
