/* eslint-disable no-useless-escape */

// @flow

const unescapeHtml = (str: string) : string =>
  str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')

export default unescapeHtml
