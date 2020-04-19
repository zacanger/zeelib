import * as test from 'tape'
import { resolve } from 'path'
import getProjectRoot from './get-project-root'

test('getProjectRoot', (t): void => {
  t.equal(getProjectRoot(), resolve(__dirname, '..'), 'works')
  t.end()
})
