import { hostname } from 'node:os'
import { createHash } from 'node:crypto'

/**
 * Get a md5 hash based on hostname, process.ppid, and date
 * @example
 * getHashFromSystem()
 */

export const getHashFromSystem = (): string => {
  const p = [ hostname(), process.pid, +(new Date()) ]
  const h = createHash('md5').update(p.join(''))
  return h.digest('hex')
}
