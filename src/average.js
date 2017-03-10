// @flow

const average = (l: number[]): number => {
  const t = l.reduce((a, b) => a + b, 0)
  return t / l.length
}

export default average
