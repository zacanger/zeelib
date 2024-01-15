import { readFile } from 'node:fs/promises'
import { type AnyMap } from './types'

/**
 * Read json file and parse it
 * @example
 * const json = await readJson('./foo.json')
 */

export const readJson = async (file: string): Promise<AnyMap | any[]> => {
  const data = await readFile(file, 'utf8')
  return JSON.parse(data)
}
