// @flow

import test from 'tape'
import getParams from './get-params'

test('getParams', (t): void => {
  // $FlowFixMe
  const thing = (a, b, c) => ({ a, b, c })
  const stuff = (): void => {}
  t.deepEqual(getParams(thing), [ 'a', 'b', 'c' ], 'works')
  t.deepEqual(getParams(stuff), [], 'returns empty array for fn with no arts')
  t.end()
})
