// @flow

import getIsBrowser from './getIsBrowser'

const setTitle = (t: string): void => {
  if (getIsBrowser()) {
    window.title = t
  } else {
    process.title = t
  }
}

export default setTitle
