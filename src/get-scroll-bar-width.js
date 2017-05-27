// @flow

/**
 * Returns the width of the brower's scrollbar
 */

const getScrollBarWidth = (): number =>
  window.innerWidth - window.document.documentElement.clientWidth

export default getScrollBarWidth
