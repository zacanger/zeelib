// @flow

/**
 * Strip subdomain from string
 * @example
 * stripSubdomain('foo.me.bar.baz') // => 'me.bar.baz'
 */

const stripSubdomain = (str: string): string =>
  str.split('').filter((c: string) => c === '.').length > 2
    ? str.replace(/^[^.]+\./g, '')
    : str

export default stripSubdomain
