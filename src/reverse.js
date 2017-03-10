// @flow

// reverses array, fast
const reverse = (items: any[]): any[] => {
  let result = []
  for (let i = items.length - 1; i >= 0; i--) {
    result.push(items[i])
  }
  return result
}

export default reverse
