/* eslint-disable no-useless-escape */

// @flow

const escapeHtml = (str: string) : string =>
  str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

export default escapeHtml
