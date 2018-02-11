// @flow

import test from 'tape'
import objectFromEntries from './object-from-entries'

test('objectFromEntries', (t): void => {
  t.deepEqual(objectFromEntries([ [ 'a', 'b' ] ]), { a: 'b' }, 'works')
  t.end()
})
