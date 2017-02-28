// @flow

type S = {
  scrollX: number,
  scrollY: number
}

const getScrollPosition = () : S =>
  ({ scrollX: window.scrollX, scrollY: window.scrollY })

export default getScrollPosition
