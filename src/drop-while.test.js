import test from 'tape'
import dropWhile from './drop-while'

test('dropWhile', (t) => {
  t.deepEqual(dropWhile((a) => a < 10, [ 3, 6, 9, 12 ]), [ 12 ], 'drops while')
  t.end()
})
