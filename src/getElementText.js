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
