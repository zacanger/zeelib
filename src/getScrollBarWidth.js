// @flow

const getScrollBarWidth = (): number =>
  window.innerWidth - window.document.documentElement.clientWidth

export default getScrollBarWidth
