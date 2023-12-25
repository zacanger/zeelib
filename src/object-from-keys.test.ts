import { test } from 'node:test'
import * as assert from 'node:assert'
import objectFromKeys from './object-from-keys'

void test('objectFromKeys', (): void => {
  assert.deepEqual(objectFromKeys([ 'FOO', 'BAR' ]), { FOO: 'FOO', BAR: 'BAR' }, 'works')
})
