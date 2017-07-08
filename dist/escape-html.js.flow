// @flow

/**
 * Escapes HTML with entities
 * @example
 * escapeHtml('<span>"&</span>\'') // => '&lt;span&gt;&quot;&amp;&lt;/span&gt;&#39;'
 */

const escapeHtml = (str: string): string =>
  str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

export default escapeHtml
