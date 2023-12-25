import { test } from 'node:test'
import * as assert from 'node:assert'
import getBasename from './get-basename'

void test('getBasename', (): void => {
  assert.equal(getBasename('foo/bar'), 'bar', 'works')
})
