/**
 * Takes a select, textarea, or input and returns its contents
 * @param {any} HTMLElement
 * @returns {string} contents
 * @example
 * getElementText(document.getElementsByTagName('input')[0]) // => string
 */

const getElementText = (el) => {
  const tg = el.tagName.toLowerCase()
  if (tg === 'select') {
    return el.textContent
  }
  if (tg === 'textarea' || tg === 'input') {
    return el.value
  }
  return ''
}

export default getElementText
