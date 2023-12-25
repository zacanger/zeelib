import { homedir } from 'node:os'

// eslint-disable-next-line @typescript-eslint/prefer-optional-chain
const env = (typeof process !== 'undefined' && process.env) ?? {}

/**
 * Get current user's home directory
 * @example
 * getUserHome() // => /home/z
 */

const getUserHome = (): string => {
  const e = env as NodeJS.ProcessEnv
  return e.HOME ??
  e.USERPROFILE ??
  homedir() ??
  (e.HOMEDRIVE && e.HOMEPATH && e.HOMEDRIVE + e.HOMEPATH) ??
  ''
}

export default getUserHome
