// @flow

type S = {
  scrollX: number,
  scrollY: number
}

/**
 * Returns current scroll position
 */

const getScrollPosition = (): S =>
  ({ scrollX: window.scrollX, scrollY: window.scrollY })

export default getScrollPosition
