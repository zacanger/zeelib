// @flow

type s = {
  scrollX: number,
  scrollY: number
}

/**
 * Restore scroll position to coordinates
 * Takes `{ scrollX: number, scrollX: number }`
 */

const restoreScrollPosition = ({ scrollX, scrollY }: s) =>
  window.scrollTo(scrollX, scrollY)

export default restoreScrollPosition
