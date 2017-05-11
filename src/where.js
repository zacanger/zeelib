// @flow

import filter from './filter'

const where = (arr: any[], f: () => any): any =>
  filter(arr, f)[0] || null

export default where
