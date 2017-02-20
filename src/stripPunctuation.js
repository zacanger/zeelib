/* eslint-disable no-useless-escape */
const stripPunctuation = (str) =>
  str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').replace(/\s{2,}/g, ' ')
export default stripPunctuation
