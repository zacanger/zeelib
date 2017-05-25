// @flow

import contains from './contains'

const notContains = (el: any, ls: string | any[]): bool => {
  console.error('`notContains` is deprecated. Please use `notElem` instead.')
  return !contains(el, ls)
}

export default notContains
