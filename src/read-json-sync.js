// @flow

import { readFileSync } from 'fs'

/**
 * Read and parse JSON
 */

const readJsonSync = (file: string): string =>
  JSON.parse(readFileSync(file, 'utf8'))

export default readJsonSync
