type F = (...args: any[]) => any

/**
 * Takes a function and returns a function that takes
 * any number of arguments
 *
 * Produces a curried function
 * @example
 * const addThree = (a, b, c) => a + b + c
 * curry(addThree)(1)(1)(1) // => 3
 */

export function curry<T> (fn: F): F {
  const getFunctionArguments = (fn: F): string[] => {
    if (typeof fn !== 'function') {
      throw new TypeError(`Expected argument to be a function! Received a ${typeof fn}.`)
    }

    const functionAsString = fn.toString()

    if (functionAsString) {
      const m = functionAsString.match(/\(.*?\)/)
      if (m?.[0]) {
        const args = m[0] // match everything between brackets
          .replace(/[()]/gi, '') // remove brackets
          .replace(/\s/gi, '') // remove all whitespace
          .split(',') // split on the commas

        // remove possible empty string from the result
        return args.filter((x) => x)
      }
    }
    return []
  }

  const originalArguments = getFunctionArguments(fn)

  const makeCurriedFunc = (...args: T[]): F => {
    const givenArguments = args || []
    return givenArguments.length < originalArguments.length
      ? (...rest: T[]) => makeCurriedFunc(...givenArguments, ...rest)
      : fn(...givenArguments)
  }

  return (...args: T[]) => makeCurriedFunc(...args)
}
