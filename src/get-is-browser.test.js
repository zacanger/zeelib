import test from 'tape'
import getIsBrowser from './get-is-browser'

test('getIsBrowser', (t) => {
  t.false(getIsBrowser(), 'is false')
  t.end()
})
