// @flow

const countItemsInArray = (arr: any[]): Object =>
  arr.reduce((a, c) => {
    a[c]++ ? 0 : a[c] = 1 // eslint-disable-line
    return a
  }, {})

export default countItemsInArray
