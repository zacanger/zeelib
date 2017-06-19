// @flow

import { readFile } from 'fs'

/**
 * Read json file, parse it, call cb with obj or err
 * @example
 * readJson('./foo.json', (err, data) => {})
 */

const readJson = (file: string, cb: any): ?any => {
  readFile(file, 'utf8', (err, json) => {
    if (err) {
      cb(err)
      return
    }
    let data
    try {
      data = JSON.parse(json)
    } catch (e) {
      cb(e)
      return
    }
    cb(null, data)
  })
}

export default readJson
