// @flow

const stripSubdomain = (s: string): string =>
  s.split('').filter((c: string) => c === '.').length > 2
    ? s.replace(/^[^.]+\./g, '')
    : s

export default stripSubdomain
