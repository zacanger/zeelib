// @flow

/**
 * `cons`
 */

const cons = (el: any, arr: any[]): any[] => {
  const l = arr.length
  const b = Array(l + 1)
  b[0] = el
  for (let i = 0; i < l; ++i) {
    b[i + 1] = arr[i]
  }
  return b
}

export default cons
