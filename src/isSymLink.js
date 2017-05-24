// @flow

import { lstatSync } from 'fs'

/**
 * Returns true if path is a symlink
 */

const isSymLink = (a: string): bool =>
  lstatSync(a).isSymbolicLink()

export default isSymLink
