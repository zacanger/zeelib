/*
 * Remove ANSI escapes from string
 */

const stripAnsi = (s: string = ''): string =>
  // eslint-disable-next-line no-control-regex
  s.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '')

export default stripAnsi
