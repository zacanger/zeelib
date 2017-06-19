// @flow

const generateSequence = (n: number, p: any): any[] => {
  console.error('`generateSequence` is deprecated. Use `replicate`.')
  return Array(n).fill().map((_, i) =>
    typeof p === 'function' ? p(n, i) : p)
}

export default generateSequence
