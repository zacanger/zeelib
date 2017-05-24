/* eslint-disable node/no-deprecated-api */

// @flow

import getIsBrowser from './getIsBrowser'

/**
 * `window.atob` for node and browser
 */

const atob = (str: string): string =>
  getIsBrowser()
    ? window.atob(str)
    : Buffer.from
      ? Buffer.from(str, 'base64').toString('utf8')
      : new Buffer(str, 'base64').toString('utf8')

export default atob
