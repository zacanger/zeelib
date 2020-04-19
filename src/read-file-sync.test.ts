import * as test from 'tape'
import readFileSync from './read-file-sync'

test('readFileSync', (t): void => {
  // @ts-ignore
  t.true(readFileSync('./package.json').includes('zeelib'), 'works')
  t.end()
})
