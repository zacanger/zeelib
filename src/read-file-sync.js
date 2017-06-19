// @flow

import { readFileSync } from 'fs'
import { resolve } from 'path'

/**
 * Safe `readFileSync`
 * @example
 * const fooContents = readFileSync('./foo')
 * if (fooContents != null) doThings(fooContents)
 */

const readFileS = (str: string): ?string => {
  try {
    return readFileSync(resolve(str), { encoding: 'utf8' })
  } catch (_) { }
}

export default readFileS
