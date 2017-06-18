/* eslint-disable no-useless-escape */
// @flow

/**
 * Strip punctuation from string
 * @example
 * stripPunctuation('asdf. as.f.sdaf .') // => 'asdf asfsdaf '
 */

const stripPunctuation = (str: string): string =>
  str
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
    .replace(/\s{2,}/g, ' ')

export default stripPunctuation
