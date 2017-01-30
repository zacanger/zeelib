const getFunctionArguments = function (fn) {
  if (typeof fn !== 'function') {
    throw new Error('Not a function')
  }

  const functionAsString = fn.toString()

  const args = functionAsString
    .match(/\(.*?\)/)[0]     // match everything between brackets
    .replace(/[()]/gi, '')   // remove brackets
    .replace(/\s/gi, '')     // remove all whitespace
    .split(',')              // split on the commas

  return args.filter(x => x) // remove possible empty string from the result
}

export default getFunctionArguments
