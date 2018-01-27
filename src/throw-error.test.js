// @flow

import test from 'tape'
import throwError from './throw-error'

test('throwError', (t): void => {
  t.throws(() => throwError('foo'), /foo/, 'works with string')
  t.throws(() => throwError(new Error('foo')), /foo/, 'works with error')
  t.end()
})
