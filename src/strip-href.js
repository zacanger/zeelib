// @flow

const stripHref = (str: string): string => {
  console.error('`stripHref` is deprecated. Use `removeAttribute`.')
  return str.replace(/(src|href)\s*=\s*(['"])/gi, '_$1=$2')
}

export default stripHref
