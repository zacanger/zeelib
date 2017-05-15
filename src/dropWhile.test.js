import test from 'tape'
import dropWhile from './dropWhile'

test('dropWhile', (t) => {
  t.deepEqual(dropWhile((a) => a < 10, [ 3, 6, 9, 12 ]), [ 12 ], 'drops while')
  t.end()
})
