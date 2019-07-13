import { readFileSync } from 'fs'

/**
 * Read and parse JSON
 * @example
 * const stuff = readJsonSync('./foo.json')
 */

const readJsonSync = (file: string): string =>
  JSON.parse(readFileSync(file, 'utf8'))

export default readJsonSync
