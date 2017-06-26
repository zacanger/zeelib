/* eslint-disable no-useless-escape */
// @flow

const stripPunctuation = (str: string): string => {
  console.error('`stripPunctuation` is deprecated. Use `removePunctuation`.')
  return str
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
    .replace(/\s{2,}/g, ' ')
}

export default stripPunctuation
