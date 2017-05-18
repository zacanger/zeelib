// @flow

import { readFileSync } from 'fs'
import { resolve } from 'path'

/**
 * Safe `readFileSync`
 */

const readFileS = (s: string): ?string => {
  try {
    return readFileSync(resolve(s), { encoding: 'utf8' })
  } catch (_) { }
}

export default readFileS
