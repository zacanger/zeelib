// @flow

import curry from './curry'

// returns true if all items pass predicate fn
const all = curry((predicate, list): bool =>
  !!list.reduce && (typeof predicate === 'function') && list.reduce((result, current) =>
    !result ? false : !!predicate(current)
  , true))

export default all
