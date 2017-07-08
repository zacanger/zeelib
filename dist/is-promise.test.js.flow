import test from 'tape'
import isPromise from './is-promise'

test('isPromise', (t) => {
  t.true(isPromise(Promise.resolve()), 'returns true for promise')
  t.false(isPromise(() => {}), 'returns false for non-promise')
  t.end()
})
