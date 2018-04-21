// @flow

import { execFile } from 'child_process'

/**
 * Opens things. Works on Linux, Mac, and Windows
 * @example
 * open('http://zacanger.com')
 */

// eslint-disable-next-line flowtype/no-weak-types, camelcase
const open = (args: string, opts: Object, cb: Function): child_process$ChildProcess => {
  const as: string[] = [ args ]
  const cmd: string = process.platform === 'win32'
    ? 'cmd'
    : process.platform === 'darwin'
      ? 'open'
      : 'xdg-open'
  return execFile(cmd, as, opts, cb)
}

export default open
