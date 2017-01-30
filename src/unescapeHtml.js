/* eslint-disable no-useless-escape */
const unescapeHtml = str =>
  str.replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"')
export default unescapeHtml
