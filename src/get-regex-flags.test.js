import test from 'tape'
import getRegexFlags from './get-regex-flags'

test('getRegexFlags', (t) => {
  t.deepEqual(getRegexFlags(/foo/ig), [ 'g', 'i' ], 'works')
  t.deepEqual(getRegexFlags(/foo/), [], 'returns empty array if none')
  t.end()
})
