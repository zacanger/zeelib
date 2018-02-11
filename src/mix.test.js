// @flow

import test from 'tape'
import mix from './mix'

test('mix', (t): void => {
  const m1 = { '0': 'g', '1': 'h', '2': 'j', '3': 'k', '4': 'l' }
  const m2 = { a: 'a', b: 'b' }
  const m3 = { '0': 1, '1': 2, '2': 3, a: 'a' }
  t.deepEqual(mix('asdf', 'ghjkl'), m1, 'mixes two strings into ojb')
  t.deepEqual(mix({ a: 'a' }, { b: 'b' }), m2, 'mixes two objs')
  t.deepEqual(mix({ a: 'a' }, [ 1, 2, 3 ]), m3, 'mixes obj and array')
  t.end()
})
