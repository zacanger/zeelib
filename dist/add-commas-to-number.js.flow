// @flow

/**
 * Adds commas in correct place in number
 * @example
 * addCommasToNumber(1000000) // => '1,000,000'
 */

const addCommasToNumber = (n: number): string => {
  let parts = n.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}

export default addCommasToNumber
