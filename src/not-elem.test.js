import test from 'tape'
import notElem from './not-elem'

test('notElem', (t) => {
  t.false(notElem('a', 'asdf'), 'works for strings')
  t.false(notElem('a', 'asdf'.split('')), 'works for arrays')
  t.true(notElem('a', 'b'), 'returns true if not in string')
  t.true(notElem('a', [ 'b' ]), 'returns true if not in array')
  t.end()
})
