// @flow

import { writeFileSync } from 'fs'

/**
 * Write JSON from a stringifiable value, sync
 */

const writeJsonSync = (
  file: string,
  data: any,
  indent: ?number = 2
): void => {
  if (typeof indent !== 'number') {
    indent = 0
  }
  writeFileSync(file, JSON.stringify(data, null, indent), 'utf8')
}

export default writeJsonSync
