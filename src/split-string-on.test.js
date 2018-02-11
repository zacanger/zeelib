// @flow

import test from 'tape'
import splitStringOn from './split-string-on'

test('splitStringOn', (t): void => {
  t.deepEqual(splitStringOn('asdfasdf asdf', 'a'), [ '', 'sdfasdf asdf' ], 'works')
  t.end()
})
