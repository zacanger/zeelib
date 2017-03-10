// @flow

const abbrevNumber = (n: number): string => {
  if (n < 1000) return `${n}`
  if (n < 10000) return (Math.round(n / 100) / 10) + 'K'
  if (n < 1000000) return Math.round(n / 1000) + 'K'
  if (n < 10000000) return (Math.round(n / 100000) / 10) + 'M'
  if (n < 1000000000) return Math.round(n / 1000000) + 'M'
  if (n < 10000000000) return Math.round(n / 100000000) + 'B'
  return Math.round(n / 1000000000) + 'B'
}

export default abbrevNumber
