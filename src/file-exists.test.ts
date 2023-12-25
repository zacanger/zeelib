import { test } from 'node:test'
import * as assert from 'node:assert'
import fileExists from './file-exists'

void test('fileExists', (): void => {
  assert.ok(fileExists('./README.md'), 'returns true for file that exists')
  assert.ok(
    !fileExists('./totally-fake-file-name'),
    'returns false for file that does not exist',
  )
})
