import test from 'tape'
import atob from './atob'

test('atob', (t) => {
  t.equal(atob('YXNkZg=='), 'asdf', 'works')
  t.end()
})
