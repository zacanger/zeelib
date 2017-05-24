// @flow

import getIsBrowser from './getIsBrowser'

/**
 * Set `window.title` or `process.title`
 */

const setTitle = (newTitle: string): void => {
  if (getIsBrowser()) {
    window.title = newTitle
  } else {
    process.title = newTitle
  }
}

export default setTitle
