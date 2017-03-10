// @flow

import { homedir } from 'os'

const getUserHome = (): string =>
  process.env.HOME ||
  process.env.HOMEPATH ||
  process.env.USERPROFILE ||
  homedir()

export default getUserHome
