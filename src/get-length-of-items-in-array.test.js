import test from 'tape'
import getLengthOfItemsInArray from './get-length-of-items-in-array'

test('getLengthOfItemsInArray', (t) => {
  t.equal(getLengthOfItemsInArray([ 1, 2, 3, 3 ], 3), 2, 'returns length of items in array')
  t.end()
})
