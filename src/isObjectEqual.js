// @ flow

// compares params by val
const isObjectEqual = (a: Object, b: Object): bool => {
  if (a === b) return true
  return JSON.stringify(a) === JSON.stringify(b)
}

export default isObjectEqual
