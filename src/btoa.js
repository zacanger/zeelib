// @flow

import getIsBrowser from './getIsBrowser'

const btoa = (s: string): string =>
  getIsBrowser()
    ? window.btoa(s)
    : Buffer.from
      ? Buffer.from(s, 'utf8').toString('base64')
      : new Buffer(s, 'utf8').toString('base64')

export default btoa
