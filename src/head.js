// @flow

const head = (arr: any[]): any => {
  console.error('`head` is deprecated. Please use `car` instead.')
  return arr[0]
}

export default head
