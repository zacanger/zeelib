// @flow

import { hostname } from 'os'

/**
 * Get hostname
 * @example
 * getHostname()
 */

const getHostname = (): string =>
  hostname()

export default getHostname
