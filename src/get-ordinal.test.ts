import { test } from 'node:test'
import * as assert from 'node:assert'
import { getOrdinal } from './get-ordinal'

void test('getOrdinal', (): void => {
  assert.equal(getOrdinal(1), '1st', 'returns 1st for 1')
  assert.equal(getOrdinal(39), '39th', 'returns 39th for 39')
  assert.equal(getOrdinal(22), '22nd', 'returns 22nd for 22')
  assert.equal(getOrdinal(21), '21st', 'returns 21st for 21')
  assert.equal(getOrdinal(200), '200th', 'returns 200th for 200')
  assert.equal(getOrdinal(303), '303rd', 'returns 303rd for 303')
  assert.equal(getOrdinal(999), '999th', 'returns 999th for 999')
})
