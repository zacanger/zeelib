// @flow

import { execSync } from 'child_process'
import { resolve } from 'path'
const SEPARATOR = process.platform === 'win32' ? ';' : ':'
const env = Object.assign({}, process.env)

env.PATH = resolve('./node_modules/.bin') + SEPARATOR + env.PATH

const execute = (cmd: string): void => {
  let output = execSync(cmd, { // eslint-disable-line no-unused-vars
    cwd : process.cwd()
  , env : env
  })
}

export default execute
