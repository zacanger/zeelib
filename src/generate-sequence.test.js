import test from 'tape'
import generateSequence from './generate-sequence'

test('generateSequence', (t) => {
  t.deepEqual(generateSequence(4, 1), [ 1, 1, 1, 1 ], 'works for simple elements')
  t.deepEqual(generateSequence(4, (a) => a + 1), [ 5, 5, 5, 5 ], 'works with function')
  t.end()
})
