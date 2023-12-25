import { execSync } from 'node:child_process'
import { resolve } from 'node:path'

const SEPARATOR = process.platform === 'win32' ? ';' : ':'
const env = Object.assign({}, process.env)

env.PATH = resolve('./node_modules/.bin') + SEPARATOR + env.PATH

/**
 * Like a standalone `npm run` that obeys `npm bin`
 * @example
 * execute('standard-format -w')
 */

const execute = (cmd: string): void => {
  execSync(cmd, {
    cwd: process.cwd(),
    env,
  })
}

export default execute
