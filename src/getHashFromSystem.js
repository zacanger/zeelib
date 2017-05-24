// @flow

import { hostname } from 'os'
import { createHash } from 'crypto'

/**
 * Get a md5 hash based on hostname, process.ppid, and date
 */

const getHashFromSystem = (): string => {
  const p = [ hostname(), process.pid, +(new Date()) ]
  const h = createHash('md5').update(p.join(''))
  return h.digest('hex')
}

export default getHashFromSystem
