// @flow

import average from './average'
import { loadavg } from 'os'

/**
 * Get load average
 */

const getLoadAverage = (): number =>
  parseFloat(average([ ...loadavg() ]).toFixed(2))

// the above line is weird because loadavg() is a tuple
// but average expects an array. ¯\_(ツ)_/¯

export default getLoadAverage
