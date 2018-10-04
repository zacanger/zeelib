// @flow

import { readFileSync as _readFileSync } from 'fs'
import { resolve } from 'path'

/**
 * Safe `readFileSync`
 * @example
 * const fooContents = readFileSync('./foo')
 * if (fooContents != null) doThings(fooContents)
 */

const readFileSync = (str: string): ?string => {
  try {
    return _readFileSync(resolve(str), { encoding: 'utf8' })
  } catch (_) { }
}

export default readFileSync
