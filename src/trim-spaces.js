// @flow

/**
 * Trim spaces from string
 */

const trimSpaces = (str: string): string =>
  typeof str === 'string' ? str.replace(/\s/g, '') : str

export default trimSpaces
