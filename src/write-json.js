// @flow

import { writeFile } from 'fs'

/**
 * Write JSON from a stringifiable value
 * @example
 * writeJson('foo.json', someObject, 4, (err) => {})
 */

const writeJson = (
  file: string,
  data: mixed,
  indent?: number | (?Error) => void = 2,
  cb?: (?Error) => void
): void => {
  if (typeof indent === 'function') {
    cb = indent
    indent = 0
  }
  if (!cb) {
    throw new Error('cb is required')
  }
  let json: string
  try {
    json = JSON.stringify(data, null, indent)
  } catch (e) {
    cb(e)
    return
  }
  writeFile(file, json, 'utf8', cb)
}

export default writeJson
