// @flow

import getIsBrowser from './getIsBrowser'

const atob = (s: string): string => {
  if (getIsBrowser()) {
    return window.atob(s)
  }
  if (Buffer.from) {
    return Buffer.from(s, 'base64').toString('utf8')
  }
  return new Buffer(s, 'base64').toString('utf8')
}

export default atob
