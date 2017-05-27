// @flow

/**
 * Like Haskell's `getArgs`, but for Node
 */

const getArgs = (): string[] =>
  process.argv.slice(2)

export default getArgs
