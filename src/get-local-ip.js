// @flow

import { lookup } from 'dns'
import { hostname } from 'os'
import { promisify } from 'util'

type Res = { address: string, family: number }

/**
 * @example
 * getLocalIp().then(console.log) // => 10.0.0.0
 */

const getLocalIp = (): Promise<string> =>
  promisify(lookup)(hostname()).then((r: Res): string => r.address)

export default getLocalIp
