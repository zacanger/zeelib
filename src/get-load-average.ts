import { loadavg } from 'node:os'
import { average } from './average'

/**
 * Get load average
 * @example
 * getLoadAverage()
 */

export const getLoadAverage = (): number =>
  parseFloat(average(loadavg()).toFixed(2))
