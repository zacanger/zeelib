import test from 'tape'
import words from './words'

test('words', (t) => {
  t.deepEqual(words('foo bar'), [ 'foo', 'bar' ], 'makes arr split on space')
  t.end()
})
