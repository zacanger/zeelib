// @flow

const normalizeText = (text: string): string => {
  const m = text.toLowerCase().match(/[a-z0-9]([a-z0-9.]*[a-z0-9])?/ig)
  return m ? m.join(' ') : ''
}

export default normalizeText
