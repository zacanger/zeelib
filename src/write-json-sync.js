// @flow

import { writeFileSync } from 'fs'

/**
 * Write JSON from a stringifiable value, sync
 * @example
 * writeJsonSync('foo.json', 'whatever')
 * writeJsonSync('foo.json', someObject, 4)
 */

const writeJsonSync = <A>(
  file: string,
  data: A,
  indent?: number = 2
): void => {
  if (typeof indent !== 'number') {
    indent = 0
  }
  writeFileSync(file, JSON.stringify(data, null, indent), 'utf8')
}

export default writeJsonSync
