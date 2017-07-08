// @flow

import { freemem, totalmem } from 'os'

/**
 * Get memory usage
 * @example
 * getMemoryUsage()
 */

const getMemoryUsage = (): number =>
  parseFloat(((freemem() / totalmem()) / Math.pow(10, -2)).toFixed(2))

export default getMemoryUsage
