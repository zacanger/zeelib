import test from 'tape'
import clone from './clone'

test('clone', (t) => {
  t.equal(clone(1), 1, 'works')
  t.end()
})
