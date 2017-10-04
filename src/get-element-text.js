// @flow
//
//

type Elem = {
  value: ?string
} & HTMLElement

/**
 * Takes a select, textarea, or input and returns its contents
 * @param {any} HTMLElement
 * @returns {string} contents
 * @example
 * getElementText(document.getElementsByTagName('input')[0]) // => string
 */

const getElementText = (el: Elem): string => {
  const tg = el.tagName.toLowerCase()
  if (tg === 'select' && el.textContent) {
    return el.textContent
  }
  if ((tg === 'textarea' || tg === 'input') && el.value) {
    return el.value
  }
  return ''
}

export default getElementText
