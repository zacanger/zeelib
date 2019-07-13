/**
 * Like Haskell's `getArgs`, but for Node
 * @example
 * getArgs() // => Array<?string>
 */

const getArgs = (): string[] => process.argv.slice(2)

export default getArgs
