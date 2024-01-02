import { freemem, totalmem } from 'node:os'

/**
 * Get memory usage
 * @example
 * getMemoryUsage()
 */

export const getMemoryUsage = (): number =>
  parseFloat((freemem() / totalmem() / Math.pow(10, -2)).toFixed(2))
