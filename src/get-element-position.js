// @flow

type p = {
  x: number,
  y: number
}

/**
 * Takes an element and returns its x/y position
 * @example
 * getElementPosition(document.getElementById('foo')) // => { x: number, y: number }
 */

const getElementPosition = (el: any): p => {
  let x = 0
  let y = 0

  let element = el
  while (element) {
    if (element.tagName === 'BODY') {
      const xScroll =
        element.scrollLeft ||
        (document && document.documentElement && document.documentElement.scrollLeft) ||
        0

      const yScroll =
        element.scrollTop ||
        (document && document.documentElement && document.documentElement.scrollTop) ||
        0

      x += (element.offsetLeft - xScroll + element.clientLeft)
      y += (element.offsetTop - yScroll + element.clientTop)
    }
    element = element.offsetParent
  }

  return { x, y }
}

export default getElementPosition
