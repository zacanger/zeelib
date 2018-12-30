// @flow

/**
 * @example
 * escapeForRegex('foo') // => foo
 * escapeForRegex('1 \\ {} []|') // => '1 \\\\ \\{\\} \\[\\]\\|'
 */

/* eslint-disable no-useless-escape */
const escapeForRegex = (s: string = ''): string =>
  s.replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, '\\$1')

export default escapeForRegex
