// @flow

import elem from './elem'

const notElem = (el: any, a: Object): bool =>
  !elem(el, a)

export default notElem
