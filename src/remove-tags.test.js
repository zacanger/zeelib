// @flow

import test from 'tape'
import removeTags from './remove-tags'

test('removeTags', (t): void => {
  t.equal(removeTags('<foo>whatever</foo>'), 'whatever', 'works')
  t.equal(removeTags('<foo>\nwhatever\n</foo>'), '\nwhatever\n', 'preserves newlines')
  t.end()
})
