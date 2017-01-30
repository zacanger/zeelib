/* eslint-disable no-useless-escape */
const escapeHtml = str =>
  str.replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
export default escapeHtml
