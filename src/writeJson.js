import { writeFile } from 'fs'

const writeJson = (file, data, indent, cb) => {
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
