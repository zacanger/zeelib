/**
 * Like Haskell's `getArgs`, but for Node
 * @example
 * getArgs() // => Array<?string>
 */

const getArgs = (): Array<string> => process.argv.slice(2)

export default getArgs
