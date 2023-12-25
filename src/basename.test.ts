import { test } from 'node:test'
import * as assert from 'node:assert'
import basename from './basename'

void test('basename', (): void => {
  assert.equal(basename('foo/bar'), 'bar', 'works')
})
