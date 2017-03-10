// @flow

type p = {
  x: number,
  y: number
}

const getElementPosition = (el: any): p => {
  let x = 0
  let y = 0

  while (el) {
    if (el.tagName === 'BODY') {
      const xScroll = el.scrollLeft || document && document.documentElement && document.documentElement.scrollLeft
      const yScroll = el.scrollTop || document && document.documentElement && document.documentElement.scrollTop

      x += (el.offsetLeft - xScroll + el.clientLeft)
      y += (el.offsetTop - yScroll + el.clientTop)
    }
    el = el.offsetParent
  }

  return { x, y }
}

export default getElementPosition
