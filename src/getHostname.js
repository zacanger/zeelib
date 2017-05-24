// @flow

import { hostname } from 'os'

/**
 * Get hostname
 */

const getHostname = (): string =>
  hostname()

export default getHostname
