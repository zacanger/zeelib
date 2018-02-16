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
  let callback = cb
  let ind
  if (typeof indent === 'function') {
    callback = indent
    ind = 0
  } else {
    ind = indent
  }
  if (!callback) {
    throw new Error('cb is required')
  }
  let json: string
  try {
    json = JSON.stringify(data, null, ind)
  } catch (e) {
    callback(e)
    return
  }
  writeFile(file, json, 'utf8', callback)
}

export default writeJson
