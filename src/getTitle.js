// @flow

import getIsBrowser from './getIsBrowser'

/**
 * Returns title of either window or document, or process,
 * depending on environment
 */

const getTitle = (): string =>
  getIsBrowser() ? (window.title || document.title) : process.title

export default getTitle
