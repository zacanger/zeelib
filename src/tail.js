// @flow

const tail = (arr: any[]): any => {
  console.error('`tail` is deprecated. Please use `cdr` instead.')
  return arr.slice(1)
}

export default tail
