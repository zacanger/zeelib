import { readFile } from 'node:fs/promises'
import { type AnyMap } from './types'

type AnyJson = AnyMap | any[]

/**
 * Read json file and parse it
 * @example
 * const json = await readJson('./foo.json')
 */

export const readJson = async (file: string): Promise<AnyJson> => {
  const data = await readFile(file, 'utf8')
  return JSON.parse(data)
}
