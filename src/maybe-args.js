// @flow

function maybeArgs (fn: () => any): any {
  console.error('`maybeArgs` is deprecated.')
  return function () {
    const args = Array.prototype.slice.call(arguments)
    const invalid = args.some((arg) => arg === null)
    if (invalid) return
    const result = fn.apply(this, args)
    return typeof result === 'function' ? maybeArgs(result) : result
  }
}

export default maybeArgs
