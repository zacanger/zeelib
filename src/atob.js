/* eslint-disable node/no-deprecated-api */
// @flow

import getIsBrowser from './getIsBrowser'

/**
 * `window.atob` for node and browser
 */

const atob = (s: string): string =>
  getIsBrowser()
    ? window.atob(s)
    : Buffer.from
      ? Buffer.from(s, 'base64').toString('utf8')
      : new Buffer(s, 'base64').toString('utf8')

export default atob
