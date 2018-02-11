// @flow

import test from 'tape'
import pluck from './pluck'

test('pluck', (t): void => {
  t.deepEqual(pluck('a', [ { a: 'a', b: 'c' }, { a: 'b' } ]), [ 'a', 'b' ], 'works')
  t.end()
})
