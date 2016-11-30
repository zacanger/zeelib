// some dom things
export const scrollTop = () =>
  global.scrollTo(0, 0)

export const getWidth = () =>
  global.innerWidth ||
  global.document.documentElement.clientWidth

export const getHeight = () =>
  global.innerHeight ||
  global.document.documentElement.clientHeight

export const getScrollBarWidth = () =>
  global.innerWidth - global.document.documentElement.clientWidth
