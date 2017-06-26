/* eslint-disable no-useless-escape */
// @flow

/**
 * Remove punctuation from string
 * @example
 * removePunctuation('asdf. as.f.sdaf .') // => 'asdf asfsdaf '
 */

const removePunctuation = (str: string): string =>
  str
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
    .replace(/\s{2,}/g, ' ')

export default removePunctuation
