// @flow

const cons = (el: any, ar: any[]): any[] => {
  const l = ar.length
  const b = Array(l + 1)
  b[0] = el
  for (let i = 0; i < l; ++i) {
    b[i + 1] = ar[i]
  }
  return b
}

export default cons
