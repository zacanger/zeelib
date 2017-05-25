// @flow

/**
 * Strip subdomain from string
 */

const stripSubdomain = (str: string): string =>
  str.split('').filter((c: string) => c === '.').length > 2
    ? str.replace(/^[^.]+\./g, '')
    : str

export default stripSubdomain
