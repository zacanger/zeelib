import test from 'tape'
import abbrevNumber from './abbrev-number'

test('abbrev-number', (t) => {
  t.equal(abbrevNumber(10000), '100K', 'shortens 10000 to 100k')
  t.end()
})
