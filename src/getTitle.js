// @flow

import getIsBrowser from './getIsBrowser'

const getTitle = (): string =>
  getIsBrowser() ? window.title : process.title

export default getTitle
