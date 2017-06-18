// @flow

/**
 * `filterFloat` from MDN's parseFloat docs
 * @example
 * filterFloat('-111.111111111111') // => -111.111111111111
 */

const filterFloat = (value: string): number => {
  if (/^(-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(value)) {
    return Number(value)
  }
  return NaN
}

export default filterFloat
