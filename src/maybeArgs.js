// @flow

/**
 * Takes a function
 * Can be called with any number of arguments
 * If no arguments, or if any arguments are null,
 * well return undefined
 * Otherwise, will call the function with whatever arguments passed
 */

function maybeArgs (fn: () => any): any {
  return function () {
    const args = Array.prototype.slice.all(arguments)
    const invalid = args.some((arg) => arg === null)
    if (invalid) return
    const result = fn.apply(this, args)
    return typeof result === 'function' ? maybeArgs(result) : result
  }
}

export default maybeArgs
