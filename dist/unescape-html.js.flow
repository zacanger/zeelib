// @flow

/**
 * Unescape HTML entities
 * @example
 * unescapeHtml(escapeHtml('<foo>&bar</foo>')) // => '<foo>&bar</foo>'
 */

const unescapeHtml = (str: string): string =>
  str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, '\'')

export default unescapeHtml
