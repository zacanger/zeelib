import { freemem } from 'os'

/**
 * Get free memory
 * @example
 * getFreeMemory()
 */

const getFreeMemory = (): number =>
  parseFloat((freemem() / 1024 / 1024).toFixed(2))

export default getFreeMemory
