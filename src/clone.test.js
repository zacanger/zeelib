// @flow

import test from 'tape'
import clone from './clone'

test('clone', (t): void => {
  t.equal(clone(1), 1, 'works for number')
  t.equal(clone('a'), 'a', 'works for string')
  t.equal(clone(null), null, 'works for null')
  t.equal(clone(true), true, 'works for bool')
  t.deepEqual(clone(/foo/), /foo/, 'works for regexp')
  t.deepEqual(clone(new Date('2018-01-01')), new Date('2018-01-01'), 'works for date')
  t.deepEqual(clone([ 1 ]), [ 1 ], 'works for array')
  t.deepEqual(clone({ a: 1 }), { a: 1 }, 'works for object')
  t.end()
})
