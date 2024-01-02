import { freemem } from 'node:os'

/**
 * Get free memory
 * @example
 * getFreeMemory()
 */

export const getFreeMemory = (): number =>
  parseFloat((freemem() / 1024 / 1024).toFixed(2))
