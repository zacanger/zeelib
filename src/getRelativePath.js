// @flow

import { relative } from 'path'

/**
 * Returns the relative path from here to there
 * example: `getRelativePath('/home/z/', '/')` -> `'../..'`
 */

const getRelativePath = (here: string, there: string): string =>
  relative(here, there)

export default getRelativePath
