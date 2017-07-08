// @flow

type t = {
  top: number,
  left: number
}

/**
 * Takes an element and retuns its offset from top left
 * @example
 * getElementOffset(document.getElementById('foo')) // => { top: number, left: number }
 */

const getElementOffset = (el: HTMLElement): t => {
  const r = el.getBoundingClientRect()
  const d = document.documentElement
  const w = window
  const top = r.top + w.pageYOffset - (d && d.clientTop || 0)
  const left = r.left + w.pageXOffset - (d && d.clientLeft || 0)
  return { top, left }
}

export default getElementOffset
