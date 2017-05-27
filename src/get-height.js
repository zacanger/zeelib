// @flow

/**
 * Get height of window
 */

const getHeight = (): number =>
  window.innerHeight ||
  window.document.documentElement.clientHeight

export default getHeight
