// @flow

import getIsBrowser from './getIsBrowser'

/**
 * Set `window.title` or `process.title`
 */

const setTitle = (t: string): void => {
  if (getIsBrowser()) {
    window.title = t
  } else {
    process.title = t
  }
}

export default setTitle
