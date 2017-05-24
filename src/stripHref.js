// @flow

/**
 * Strip `href` and `src` from string
 */

const stripHref = (s: string): string =>
  s.replace(/(src|href)\s*=\s*(['"])/gi, '_$1=$2')

export default stripHref
