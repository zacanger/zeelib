// @flow

import { hostname } from 'os'

const getHostname = (): string =>
  hostname()

export default getHostname
