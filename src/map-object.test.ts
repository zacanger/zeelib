import { test } from 'node:test'
import * as assert from 'node:assert'
import { mapObject } from './map-object'

void test('mapObject', (): void => {
  const f = (a: string): string => a + ' world'
  const d = { a: 'hello', b: 'sup' }
  const e = { a: 'hello world', b: 'sup world' }
  assert.deepEqual(mapObject(f, d), e, 'works')
})
