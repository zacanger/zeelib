// @flow

const stripSubdomain = (str: string): string => {
  console.error('`stripSubdomain` is deprecated. Use `removeSubdomain`.')
  return str.split('').filter((c: string) => c === '.').length > 2
    ? str.replace(/^[^.]+\./g, '')
    : str
}

export default stripSubdomain
