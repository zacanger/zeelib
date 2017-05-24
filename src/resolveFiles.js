// @flow

import { resolve } from 'path'

/**
 * Resolve a list of paths
 */

const resolveFiles = (ls: string[]): string[] =>
  ls.map((e) => resolve(e))

export default resolveFiles
