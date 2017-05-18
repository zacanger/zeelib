// @flow

/**
 * Get window width
 */

const getWidth = (): number =>
  window.innerWidth ||
  window.document.documentElement.clientWidth

export default getWidth
