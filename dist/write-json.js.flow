import { writeFile } from 'fs'

/**
 * Write JSON from a stringifiable value
 * @example
 * writeJson('foo.json', someObject, 4, (err) => {})
 */

const writeJson = (
  file: string,
  data: any,
  indent: ?number = 2,
  cb: () => any
) => {
  if (typeof cb !== 'function') {
    cb = indent
    indent = 0
  }
  let json
  try {
    json = JSON.stringify(data, null, indent)
  } catch (e) {
    cb(e)
    return
  }
  writeFile(file, json, 'utf8', cb)
}

export default writeJson
