// @flow

import { resolve } from 'path'

/**
 * Resolve a list of paths
 */

const resolveFiles = (l: string[]): string[] =>
  l.map((e) => resolve(e))

export default resolveFiles
