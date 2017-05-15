import test from 'tape'
import getOrdinal from './getOrdinal'

test('getOrdinal', (t) => {
  t.equal(getOrdinal(1), '1st', 'returns 1st for 1')
  t.equal(getOrdinal(39), '39th', 'returns 39th for 39')
  t.equal(getOrdinal(22), '22nd', 'returns 22nd for 22')
  t.end()
})
