// @flow

import test from 'tape'
import sortBy from './sort-by'

test('sortBy', (t): void => {
  const f = (a) => a.id
  const l = [ { id: 1 }, { id: 3 }, { id: 2 } ]
  const e = [ { id: 1 }, { id: 2 }, { id: 3 } ]
  t.deepEqual(sortBy(f, l), e, 'works')
  t.end()
})
