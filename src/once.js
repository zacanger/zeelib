// only calls fn once; subsequent calls just return first val
const once = (fn) => {
  let returnValue
  return (...args) => {
    if (!returnValue) {
      returnValue = fn(...args)
    }
    return returnValue
  }
}

export default once
