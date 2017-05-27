// @flow

/**
 * Remove numeric chars from string
 */

const removeNumeric = (str: string): string =>
  str.replace(/[0-9]/g, '')

export default removeNumeric
