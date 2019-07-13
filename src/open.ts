import { execFile } from 'child_process'

/**
 * Opens things. Works on Linux, Mac, and Windows
 * @example
 * open('http://zacanger.com')
 */

const open = (args: string, opts: {}, cb: Function): void => {
  const as: string[] = [args]
  const cmd: string =
    process.platform === 'win32'
      ? 'cmd'
      : process.platform === 'darwin'
      ? 'open'
      : 'xdg-open'
  // @ts-ignore
  return execFile(cmd, as, opts, cb)
}

export default open
