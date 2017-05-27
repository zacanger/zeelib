// compares params by val
const isObjectEqual = (a, b) => {
  console.error('`isObjectEqual` is deprecated. Please use `eq` instead.')
  if (a === b) return true
  return JSON.stringify(a) === JSON.stringify(b)
}

export default isObjectEqual
