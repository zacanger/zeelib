import { writeFileSync } from 'fs'

/**
 * Write JSON from a stringifiable value, sync
 * @example
 * writeJsonSync('foo.json', 'whatever')
 * writeJsonSync('foo.json', someObject, 4)
 */

const writeJsonSync = <A>(file: string, data: A, indent: number = 2): void => {
  const ind = typeof indent !== 'number' ? 0 : indent
  writeFileSync(file, JSON.stringify(data, null, ind), 'utf8')
}

export default writeJsonSync
