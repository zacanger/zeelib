// @flow

// from MDN's parseFloat docs
const filterFloat = (value: string) : number => {
  if (/^(-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(value)) {
    return Number(value)
  }
  return NaN
}

export default filterFloat
