// @flow

import test from 'tape'
import objectFromKeys from './object-from-keys'

test('objectFromKeys', (t): void => {
  t.deepEqual(objectFromKeys([ 'FOO', 'BAR' ]), { FOO: 'FOO', BAR: 'BAR' }, 'works')
  t.end()
})
