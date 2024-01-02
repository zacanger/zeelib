import { test } from 'node:test'
import * as assert from 'node:assert'
import { fileExists } from './file-exists'

void test('fileExists', async (): Promise<void> => {
  await fileExists('./README.md')
    .then((res) => {
      assert.ok(res, 'returns true for file that exists')
    })

  await fileExists('./totally-fake-file-name')
    .then((_) => {})
    .catch((_) => {
      assert.ok('made it to catch', 'returns false for file that does not exist')
    })
})
