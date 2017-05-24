// @flow

import { statSync } from 'fs'

/**
 * Returns true if the path is a file
 */

const isFile = (a: string): bool =>
  statSync(a).isFile()

export default isFile
