import { loadavg } from 'node:os'

const average = (xs: number[]): number => {
  const t = xs.reduce((a, b) => a + b, 0)
  return t / xs.length
}

/**
 * Get load average
 * @example
 * getLoadAverage()
 */

const getLoadAverage = (): number =>
  parseFloat(average([ ...loadavg() ]).toFixed(2))

// the above line is weird because loadavg() is a tuple
// but average expects an array. ¯\_(ツ)_/¯

export default getLoadAverage
