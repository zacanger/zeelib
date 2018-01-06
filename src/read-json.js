// @flow

import { readFile } from 'fs'

/**
 * Read json file, parse it, call cb with obj or err
 * @example
 * readJson('./foo.json', (err, data) => {})
 */

const readJson = <A>(file: string, cb: (?Error, ?A) => void): void => {
  readFile(file, 'utf8', (err, json): void => {
    if (err) {
      cb(err)
      return
    }
    let data: A
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
