// @flow

const findIndex = (el: any, arr: any[]): number => {
  console.error('`findIndex` is deprecated. Use `indexOf`.')
  return arr.indexOf(el)
}

export default findIndex
