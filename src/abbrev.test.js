import test from 'tape'
import abbrev from './abbrev'

test('abbrev', (t) => {
  t.equal(abbrev('Zacary Erik Anger'), 'ZEA', 'shortens my name to my initials')
  t.end()
})
