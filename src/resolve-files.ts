import { resolve } from 'path'

/**
 * Resolve a list of paths
 * @example
 * resolveFiles([ 'foo', 'bar' ])
 */

const resolveFiles = (ls: Array<string>): Array<string> =>
  ls.map((e) => resolve(e))

export default resolveFiles
