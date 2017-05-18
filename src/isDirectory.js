// @flow

import { statSync } from 'fs'

/**
 * Returns true if the path is a directory
 */

const isDirectory = (a: string): bool =>
  statSync(a).isDirectory()

export default isDirectory
