// @flow

import getIsBrowser from './get-is-browser'

/**
 * Set `window.title` or `process.title`
 * @example
 * setTitle('foo')
 */

const setTitle = (newTitle: string): void => {
  if (getIsBrowser()) {
    window.title = newTitle
  } else {
    process.title = newTitle
  }
}

export default setTitle
