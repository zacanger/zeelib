import * as test from 'tape'
import fileExists from './file-exists'

test('fileExists', (t): void => {
  t.true(fileExists('./README.md'), 'returns true for file that exists')
  t.false(
    fileExists('./totally-fake-file-name'),
    'returns false for file that does not exist'
  )
  t.end()
})
