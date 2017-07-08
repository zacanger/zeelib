// @flow

import isBrowser from './is-browser'

/**
 * Returns title of either window or document, or process,
 * depending on environment
 * @example
 * getTitle()
 */

const getTitle = (): string =>
  isBrowser() ? (window.title || document.title) : process.title

export default getTitle
