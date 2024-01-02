/**
 * @example
 * escapeForRegex('foo') // => foo
 * escapeForRegex('1 \\ {} []|') // => '1 \\\\ \\{\\} \\[\\]\\|'
 */

export const escapeForRegex = (s: string = ''): string =>
  // eslint-disable-next-line no-useless-escape
  s.replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, '\\$1')
