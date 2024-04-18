import * as c from 'node:child_process'
import { type AnyMap } from './types'

type Cb = (error: c.ExecFileException | null, stdout: string | Buffer, stderr: string | Buffer) => void

/**
 * Opens things. Works on Linux, Mac, and Windows
 * @example
 * open('http://zacanger.com')
 */

export const open = (args: string, opts: AnyMap, cb: Cb): void => {
  const as: string[] = [ args ]
  const cmd: string =
    process.platform === 'win32'
      ? 'cmd'
      : process.platform === 'darwin'
        ? 'open'
        : 'xdg-open'
  c.execFile(cmd, as, opts, cb)
}
