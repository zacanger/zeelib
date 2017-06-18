// @flow

/**
 * Get window width
 * @example
 * getWidth()
 */

const getWidth = (): number =>
  window.innerWidth ||
  window.document.documentElement.clientWidth

export default getWidth
