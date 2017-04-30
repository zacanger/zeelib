// @flow

const imul = Math.imul || ((a: number, b: number): number => {
  const ah = (a >>> 16) & 0xffff
  const al = a & 0xffff
  const bh = (b >>> 16) & 0xffff
  const bl = b & 0xffff
  return ((al * bl) + (((ah * bh + al * bh) << 16) >>> 0) | 0)
})

export default imul
