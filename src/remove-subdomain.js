// @flow

/**
 * Remove subdomain from string
 * @example
 * removeSubdomain('foo.me.bar.baz') // => 'me.bar.baz'
 */

const removeSubdomain = (str: string): string =>
  str.split('').filter((c: string) => c === '.').length > 1
    ? str.replace(/^[^.]+\./g, '')
    : str

export default removeSubdomain
