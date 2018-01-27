// @flow

import test from 'tape'
import getParams from './get-params'

test('getParams', (t): void => {
  // $FlowFixMe
  const thing = (a, b, c) => ({ a, b, c })
  t.deepEqual(getParams(thing), [ 'a', 'b', 'c' ], 'works')
  t.end()
})
