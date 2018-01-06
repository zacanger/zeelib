// @flow

import test from 'tape'
import removePunctuation from './remove-punctuation'

test('removePunctuation', (t): void => {
  t.equal(removePunctuation('asdf. as.f.sdaf .'), 'asdf asfsdaf ', 'works')
  t.end()
})
