import { homedir } from 'os'

const getUserHome = () =>
  process.env.HOME ||
  process.env.HOMEPATH ||
  process.env.USERPROFILE ||
  homedir()
export default getUserHome
