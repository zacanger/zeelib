// @flow

import { hostname } from 'os'

const withInfo = (str: string = ''): string =>
  `${str}:${hostname()}:${process.pid}`

/**
 * `console.log` with hostname and PID info
 */

const logWithInfo = (str: string = ''): void =>
  console.log(withInfo(str))

export default logWithInfo
