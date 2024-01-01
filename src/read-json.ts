import { readFile } from 'node:fs/promises'

type AnyMap = Record<string, any>
type AnyJson = AnyMap | any[]

/**
 * Read json file and parse it
 * @example
 * const json = await readJson('./foo.json')
 */

const readJson = async (file: string): Promise<AnyJson> => {
  const data = await readFile(file, 'utf8')
  return JSON.parse(data)
}

export default readJson
