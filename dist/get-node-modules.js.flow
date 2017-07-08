// @flow

import { readdirSync } from 'fs'

/**
 * Returns array of all locally installed
 * Node modules
 * @example
 * getNodeModules()
 */

const getNodeModules = (): string[] =>
  readdirSync('node_modules')
    .filter((n) => n !== '.bin')

export default getNodeModules
