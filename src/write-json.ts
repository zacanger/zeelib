import { writeFile } from 'node:fs/promises'

/**
 * Write JSON from a stringifiable value
 * @example
 * await writeJson('foo.json', someObject, 4)
 */

export const writeJson = async (
  path: string,
  data: any,
  indent: number,
): Promise<void> => {
  const json = JSON.stringify(data, null, indent)
  await writeFile(path, json)
}
