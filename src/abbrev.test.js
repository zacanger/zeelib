// @flow

import test from 'tape'
import abbrev from './abbrev'

test('abbrev', (t): void => {
  t.equal(abbrev('Zacary Erik Anger'), 'ZEA', 'shortens my name to my initials')
  t.end()
})
