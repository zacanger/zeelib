// @flow

import test from 'tape'
import trimSpaces from './trim-spaces'

test('trimSpaces', (t): void => {
  t.equal(trimSpaces(' asdf asdf '), 'asdfasdf', 'works')
  t.end()
})
