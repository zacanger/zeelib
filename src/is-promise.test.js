// @flow

import test from 'tape'
import isPromise from './is-promise'

test('isPromise', (t): void => {
  t.true(isPromise(Promise.resolve()), 'returns true for promise')
  t.false(isPromise((): void => {}), 'returns false for non-promise')
  t.end()
})
