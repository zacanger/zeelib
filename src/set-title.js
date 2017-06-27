// @flow

import isBrowser from './is-browser'

/**
 * Set `window.title` or `process.title`
 * @example
 * setTitle('foo')
 */

const setTitle = (newTitle: string): void => {
  if (isBrowser()) {
    window.title = newTitle
  } else {
    process.title = newTitle
  }
}

export default setTitle
