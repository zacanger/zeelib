import test from 'tape'
import getOrdinal from './get-ordinal'

test('getOrdinal', (t) => {
  t.equal(getOrdinal(1), '1st', 'returns 1st for 1')
  t.equal(getOrdinal(39), '39th', 'returns 39th for 39')
  t.equal(getOrdinal(22), '22nd', 'returns 22nd for 22')
  t.equal(getOrdinal(21), '21st', 'returns 21st for 21')
  t.equal(getOrdinal(200), '200th', 'returns 200th for 200')
  t.equal(getOrdinal(303), '303rd', 'returns 303rd for 303')
  t.equal(getOrdinal(999), '999th', 'returns 999th for 999')
  t.end()
})
