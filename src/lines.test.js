import test from 'tape'
import lines from './lines'

test('lines', (t) => {
  t.plan(1)
  t.deepEqual(lines('foo\nbar'), [ 'foo', 'bar' ], 'makes arr split on newline')
})
