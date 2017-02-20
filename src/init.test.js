import test from 'tape'
import init from './init'

test('init', (t) => {
  t.plan(2)
  t.deepEqual(init([ 1, 2, 3 ]), [ 1, 2 ], 'returns all but last el of arr')
  t.deepEqual(init([]), [], 'returns empty arr if passed empty arr')
})
