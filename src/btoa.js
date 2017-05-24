/* eslint-disable node/no-deprecated-api */

// @flow

/**
 * `window.btoa` for node and browser
 */

import getIsBrowser from './getIsBrowser'

const btoa = (str: string): string =>
  getIsBrowser()
    ? window.btoa(str)
    : Buffer.from
      ? Buffer.from(str, 'utf8').toString('base64')
      : new Buffer(str, 'utf8').toString('base64')

export default btoa
