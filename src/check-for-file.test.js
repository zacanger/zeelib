// @flow

import test from 'tape'
import checkForFile from './check-for-file'

test('checkForFile', (t): void => {
  t.true(checkForFile('./README.md'), 'returns true for file that exists')
  t.false(checkForFile('./totally-fake-file-name'), 'returns false for file that does not exist')
  t.end()
})
