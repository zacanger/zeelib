// @flow

import test from 'tape'
import mapObject from './map-object'

test('mapObject', (t): void => {
  const f = (a: string): string => a + ' world'
  const d = { a: 'hello', b: 'sup' }
  const e = { a: 'hello world', b: 'sup world' }
  t.deepEqual(mapObject(f, d), e, 'works')
  t.end()
})
