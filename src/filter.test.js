import test from 'tape'
import filter from './filter'

test('filter', (t) => {
  const ar = [ 'a', 'b' ]
  const fn = (a) => a
  t.deepEqual(filter(fn, ar), ar, 'returns arr also passed when passed id fn')
  t.is(typeof filter({}), 'object', 'returns obj when passed obj')
  t.end()
})
