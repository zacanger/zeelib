// @flow

import { execFile } from 'child_process'

/**
 * Opens things. Works on Linux, Mac, and Windows
 */

const open = (args: any, opts: any, cb: any): any => {
  args = [ args ]
  const cmd = process.platform === 'win32'
  ? 'cmd'
  : process.platform === 'darwin'
    ? 'open'
    : 'xdg-open'
  return execFile(cmd, args, opts, cb)
}

export default open
