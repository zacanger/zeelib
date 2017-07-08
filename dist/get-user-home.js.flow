import { homedir } from 'os'
const { env } = process

/**
 * Get current user's home directory
 * @returns {string} home dir
 * @example
 * getUserHome()
 */

const getUserHome = () =>
  env.HOME ||
  env.USERPROFILE ||
  env.HOMEDRIVE + env.HOMEPATH ||
  homedir()

export default getUserHome
