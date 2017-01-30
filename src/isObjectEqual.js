// compares params by val
const isObjectEqual = (a, b) => {
  if (a === b) return true
  return JSON.stringify(a) === JSON.stringify(b)
}

export default isObjectEqual
