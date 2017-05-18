// @flow

/**
 * Get function arguments
 */

const getFunctionArguments = function (fn: () => any): ?any[] {
  if (typeof fn !== 'function') {
    throw new Error('Not a function')
  }

  const functionAsString = fn.toString()

  if (functionAsString) {
    const m = functionAsString.match(/\(.*?\)/)
    if (m && m[0]) {
      const args = m[0]          // match everything between brackets
        .replace(/[()]/gi, '')   // remove brackets
        .replace(/\s/gi, '')     // remove all whitespace
        .split(',')              // split on the commas

      return args.filter((x) => x) // remove possible empty string from the result
    }
  }
}

export default getFunctionArguments
