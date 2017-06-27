/* eslint-disable node/no-deprecated-api */

// @flow

/**
 * `window.btoa` for node and browser
 * @example
 * btoa('asdf') // => 'YXNkZg=='
 */

import isBrowser from './is-browser'

const btoa = (str: string): string =>
  isBrowser()
    ? window.btoa(str)
    : Buffer.from
      ? Buffer.from(str, 'utf8').toString('base64')
      : new Buffer(str, 'utf8').toString('base64')

export default btoa
