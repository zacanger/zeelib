import { test } from 'node:test'
import * as assert from 'node:assert'
import { resolve } from 'node:path'
import getProjectRoot from './get-project-root'

void test('getProjectRoot', (): void => {
  assert.equal(getProjectRoot(), resolve(__dirname, '..'), 'works')
})
