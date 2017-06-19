// @flow

import { hostname } from 'os'

const withInfo = (str: string = ''): string =>
  `${str}:${hostname()}:${process.pid}`

/**
 * `console.log` with hostname and PID info
 * @example
 * logWithInfo('foo') // => `foo:angr:1234`
 */

const logWithInfo = (str: string = ''): void =>
  console.log(withInfo(str))

export default logWithInfo
