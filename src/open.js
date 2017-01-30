import { execFile } from 'child_process'

const open = (args, opts, cb) => {
  args = [args]
  const cmd = process.platform === 'win32'
  ? 'cmd'
  : process.platform === 'darwin'
    ? 'open'
    : 'xdg-open'
  return execFile(cmd, args, opts, cb)
}

export default open
