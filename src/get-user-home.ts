import { homedir } from 'node:os'

const env = process?.env ?? {}

/**
 * Get current user's home directory
 * @example
 * getUserHome() // => /home/z
 */

export const getUserHome = (): string => {
  const e = env
  return e.HOME ??
  e.USERPROFILE ??
  homedir() ??
  (e.HOMEDRIVE && e.HOMEPATH && e.HOMEDRIVE + e.HOMEPATH) ??
  ''
}
