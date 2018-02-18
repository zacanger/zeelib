// @flow

import test from 'tape'
import getRegexFlags from './get-regex-flags'

test('getRegexFlags', (t): void => {
  t.deepEqual(getRegexFlags(/foo/ig), [ 'g', 'i' ], 'works')
  t.deepEqual(getRegexFlags(/foo/gimuy), [ 'g', 'i', 'm', 'u', 'y' ], 'works for more flags')
  t.deepEqual(getRegexFlags(/foo/), [], 'returns empty array if none')
  t.end()
})
