import test from 'tape'
import elem from './elem'

test('elem', (t) => {
  t.true(elem('a', 'asdf'), 'works for strings')
  t.true(elem('a', 'asdf'.split('')), 'works for arrays')
  t.false(elem('a', 'b'), 'returns false if not in string')
  t.false(elem('a', [ 'b' ]), 'returns false if not in array')
  t.end()
})
