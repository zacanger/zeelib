// @flow

type s = {
  scrollX: number,
  scrollY: number
}

const restoreScrollPosition = ({ scrollX, scrollY }: s) =>
  window.scrollTo(scrollX, scrollY)

export default restoreScrollPosition
