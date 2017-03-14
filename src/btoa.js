// @flow

import getIsBrowser from './getIsBrowser'

const btoa = (s: string): string => {
  if (getIsBrowser()) {
    return window.btoa(s)
  }
  if (Buffer.from) {
    return Buffer.from(s, 'utf8').toString('base64')
  }
  return new Buffer(s, 'utf8').toString('base64')
}

export default btoa
