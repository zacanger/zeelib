// @flow

import test from 'tape'
import cloneWithout from './clone-without'

test('cloneWithout', (t): void => {
  t.deepEqual(cloneWithout({ a: 1, b: 2 }, 'a'), { b: 2 }, 'strips one key')
  t.deepEqual(cloneWithout({ a: 1, b: 2 }, 'a', 'b'), {}, 'strips more than one')
  t.end()
})
