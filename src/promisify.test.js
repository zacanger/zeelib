// @flow

import test from 'tape'
import promisify from './promisify'
import fs from 'fs'

test('promisify', (t): Promise<void> =>
  promisify(fs.readdir)('.').then((files): void => {
    t.assert(files.includes('package.json'), 'works')
    t.end()
  })
)
