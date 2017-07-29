// @flow

import { homedir } from 'os'
const { env } = process

/**
 * Get current user's home directory
 * @example
 * getUserHome() // => /home/z
 */

const getUserHome = (): string =>
  env.HOME ||
  env.USERPROFILE ||
  homedir() ||
  (env.HOMEDRIVE && env.HOMEPATH && env.HOMEDRIVE + env.HOMEPATH) ||
  ''

export default getUserHome
