import test from 'tape'
import lines from './lines'

test('lines', (t) => {
  t.deepEqual(lines('foo\nbar'), [ 'foo', 'bar' ], 'makes arr split on newline')
  t.end()
})
