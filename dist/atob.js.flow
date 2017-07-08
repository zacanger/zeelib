/* eslint-disable node/no-deprecated-api */

// @flow

import isBrowser from './is-browser'

/**
 * `window.atob` for node and browser
 * @example
 * atob('YXNkZg==') // => 'asdf'
 */

const atob = (str: string): string =>
  isBrowser()
    ? window.atob(str)
    : Buffer.from
      ? Buffer.from(str, 'base64').toString('utf8')
      : new Buffer(str, 'base64').toString('utf8')

export default atob
