import { homedir } from 'os'
const { env } = process

const getUserHome = () =>
  env.HOME ||
  env.USERPROFILE ||
  env.HOMEDRIVE + env.HOMEPATH ||
  homedir()

export default getUserHome
