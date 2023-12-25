import * as c from 'node:child_process'

type Cb = (error: c.ExecFileException | null, stdout: string | Buffer, stderr: string | Buffer) => void

/**
 * Opens things. Works on Linux, Mac, and Windows
 * @example
 * open('http://zacanger.com')
 */

// eslint-disable-next-line @typescript-eslint/ban-types
const open = (args: string, opts: {}, cb: Cb): void => {
  const as: string[] = [ args ]
  const cmd: string =
    process.platform === 'win32'
      ? 'cmd'
      : process.platform === 'darwin'
        ? 'open'
        : 'xdg-open'
  c.execFile(cmd, as, opts, cb)
}

export default open
