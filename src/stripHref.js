// @flow

/**
 * Strip `href` and `src` from string
 */

const stripHref = (str: string): string =>
  str.replace(/(src|href)\s*=\s*(['"])/gi, '_$1=$2')

export default stripHref
