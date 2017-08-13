import test from 'tape'
import flip from './flip'

test('flip', (t) => {
  const minus = (a, b) => a - b
  t.equal(minus(2, 1), 1, 'setup test')
  t.equal(flip(minus)(2, 1), -1, 'works')
  t.end()
})
