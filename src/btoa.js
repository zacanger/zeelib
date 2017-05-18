/* eslint-disable node/no-deprecated-api */
// @flow

/**
 * `window.btoa` for node and browser
 */

import getIsBrowser from './getIsBrowser'

const btoa = (s: string): string =>
  getIsBrowser()
    ? window.btoa(s)
    : Buffer.from
      ? Buffer.from(s, 'utf8').toString('base64')
      : new Buffer(s, 'utf8').toString('base64')

export default btoa
