import * as test from 'tape'
import atob from './atob'

test('atob', (t): void => {
  t.equal(atob('YXNkZg=='), 'asdf', 'works')
  t.end()
})
