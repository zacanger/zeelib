import test from 'tape'
import words from './words'

test('words', (t) => {
  t.plan(1)
  t.deepEqual(words('foo bar'), [ 'foo', 'bar' ], 'makes arr split on space')
})
