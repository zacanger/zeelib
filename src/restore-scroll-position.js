// @flow

type s = {
  scrollX: number,
  scrollY: number
}

/**
 * Restore scroll position to coordinates
 * @example
 * restoreScrollPosition({ scrollX: 0, scrollY: 100 })
 */

const restoreScrollPosition = ({ scrollX, scrollY }: s) =>
  window.scrollTo(scrollX, scrollY)

export default restoreScrollPosition
