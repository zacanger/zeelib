// @flow

type p = {
  x: number,
  y: number
}

/**
 * Takes an element and returns its x/y position
 */

const getElementPosition = (el: any): p => {
  let x = 0
  let y = 0

  while (el) {
    if (el.tagName === 'BODY') {
      const xScroll =
        el.scrollLeft ||
        (document && document.documentElement && document.documentElement.scrollLeft) ||
        0

      const yScroll =
        el.scrollTop ||
        (document && document.documentElement && document.documentElement.scrollTop) ||
        0

      x += (el.offsetLeft - xScroll + el.clientLeft)
      y += (el.offsetTop - yScroll + el.clientTop)
    }
    el = el.offsetParent
  }

  return { x, y }
}

export default getElementPosition
