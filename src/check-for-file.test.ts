import { test } from 'node:test'
import * as assert from 'node:assert'
import checkForFile from './check-for-file'

void test('checkForFile', (): void => {
  assert.ok(checkForFile('./README.md'), 'returns true for file that exists')
  assert.ok(!checkForFile('./totally-fake-file-name'), 'returns false for file that does not exist')
})
