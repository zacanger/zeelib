import { test } from 'node:test'
import * as assert from 'node:assert'
import getRegexFlags from './get-regex-flags'

void test('getRegexFlags', (): void => {
  assert.deepEqual(getRegexFlags(/foo/ig), [ 'g', 'i' ], 'works')
  assert.deepEqual(getRegexFlags(/foo/gimuy), [ 'g', 'i', 'm', 'u', 'y' ], 'works for more flags')
  assert.deepEqual(getRegexFlags(/foo/), [], 'returns empty array if none')
})
